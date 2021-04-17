const express = require("express");

const bodyParser = require("body-parser");

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

app.use(
  bodyParser.urlencoded({
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
app.listen(3000, () => {
  console.log("server is running...");
});

//创建登录接口
app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let sql = "SELECT uid,username FROM users WHERE username=?";
  pool.query(sql, [username], (err, result) => {
    if (err) throw err;
    console.log(result, typeof result);
    if (!result) {
      res.send({ message: "登录失败", code: 201 });
    } else {
      res.send({ message: "登录成功", code: 200, name: result[0].username });
    }
  });
});

//创建注册接口
app.post("/regist", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let sql = "SELECT username FROM users WHERE username=?";
  pool.query(sql, [username], (err, result) => {
    if (err) throw err;
    console.log(result);
    if (result.length == 0) {
      let sql = "INSERT users(username,password) VALUES (?,?)";
      pool.query(sql, [username, password], (err, result) => {
        if (err) throw err;
        // console.log(result);
        if (result.affectedrow !== 0) {
          res.send({ message: "注册成功", code: 200 });
        } else {
          res.send({ message: "注册失败", code: 201 });
        }
      });
    } else {
      res.send({ message: "用户名已存在", code: 201 });
    }
  });
});
