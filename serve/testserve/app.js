const express = require("express");

const bodyParser = require("body-parser");

/*引入token的模块*/
const jwt=require("jsonwebtoken")
const fs = require('fs');
const path = require('path');
const mysql = require("mysql");

const pool = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "xc",
  connectionLimit: 10,
  charset: "utf8",
});
const app = express();

app.use(bodyParser.urlencoded({
    extended: false,
  })
);

// 加载CORS模块
const cors = require("cors");

// 使用CORS中间件
app.use(
  cors({
    origin: ["http://localhost:8080", "http://127.0.0.1:8080"],
  })
);

//启动3000端口
app.listen(3030, () => {
  console.log("server is running...");
});

//生成token
function generateToken(data){
  let created = Math.floor(Date.now() / 1000);
  let cert = fs.readFileSync(path.join(__dirname, './pem/rsa_private_key.pem'));//私钥 可以自己生成
  let token = jwt.sign({
      data,
      exp: created + 60 * 60,
  }, cert, {algorithm: 'RS256'});
  return token;
}

// 校验token
function verifyToken(token) {
  let cert = fs.readFileSync(path.join(__dirname, './pem/rsa_public_key.pem'));//公钥 可以自己生成
  let res;
  try {
      if(token!==undefined){
          let result = jwt.verify(token, cert, {algorithms: ['RS256']}) || {};
          res = result.data || {};
      }
  } catch (e) {
      res = e;
  }
  return res;
}

// 使用中间件接收token
app.use((req, res, next)=>{ 
  //验证url是否是目标权限“==”判断，不能是一个=
  if (req.url == '/login') {
    let token = req.headers.token;
    //三个等号===，不能是==，因为==比较内容不比较类型
    if(token===undefined) {
      //首次登录没有token,result等于undefined进行放行
      //将用户名解析出来单独赋值为result
      let result=req.body.username;
      // console.log(req);
      req.user=result;
      next();    
    }else{
     //校验翻译token,并将token赋值给reault
    let result = verifyToken(token);
    // 如果考验通过就next，否则就返回登陆信息不正确
     if (result.name == 'TokenExpiredError') {
      res.send({status: 403, msg: '登录超时，请重新登录'});
    } else if (result.name=="JsonWebTokenError"){
      res.send({status: 403, msg: '证书出错'})
    } else {     
    // 将token解析出来的是服务器生成token时对应的用户信息，当时对什么加密，现在就解析什么
    //这里是用户名，将其给user变量
      req.user=result;
      // console.log(result);
      next();
    }
   }
  } else{next()}
});

//创建登录接口
app.post("/login", (req, res) => {
  //利用中间件将用户信息放到了user中
  let user = req.user;
  console.log( user);
  let sql = "SELECT uid,username FROM users WHERE username=?";
  pool.query(sql, [user], (err, result) => {
    if (err) throw err;
    console.log(result, typeof result);
    if (!result) {
      res.send({ message: "登录失败", code: 403 });
    } else {
      //登陆成功后，利用jwt生成token信息并返回
      res.send({ message: "登录成功", code: 200, name:result[0].username, token:generateToken(result[0].username) });
    }
  });
});

//创建注册接口
app.post("/regist", (req, res) => {
  let user=req.body;
  console.log(user);
  let sql = "SELECT username FROM users WHERE username=?";
  pool.query(sql, [user.username], (err, result) => {
    if (err) throw err;
    console.log(result);
    if (result.length == 0) {
      let sql = "INSERT users(username,password) VALUES (?,?)";
      pool.query(sql, [user.username, user.password], (err, result) => {
        if (err) throw err;
        console.log(result);
        if (result.affectedrow !== 0) {
          //注册成功后依旧返回客户端一个新的token
          //因为注册成功后不返回用户信息，所以此处使用客户端信息进行token加密并返回
          res.send({ message: "注册成功", code: 200,name:user.username, token:generateToken(user.username) });
        } else {
          res.send({ message: "注册失败", code: 201 });
        }
      });
    } else {
      res.send({ message: "用户名已存在", code: 201 });
    }
  });
});
