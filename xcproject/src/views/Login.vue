<template>
  <div class="Login">
    <div class="lg_hd">
      <h1>
        <a href="#"></a>
      </h1>
    </div>
    <!-- 安全警告 -->
    <div class="tips-security">
      <i></i>
      依据《网络安全法》，为保障您相关功能的正常使用，账号需绑定手机，如您未绑定则登录后会引导您操作绑定。
      新版
      <a href="">《隐私政策》</a>已上线，感谢您的支持。
    </div>

    <!-- 背景图片 -->
    <div class="lg_banner_wrap">
      <div class="mod-box">
        <div class="lg_loginwrap">
          <!-- 个性化登录 -->
          <div class="lg_loginbox" v-if="isShow">
            <h2>
              携程账号登录
              <a href="javascript:;" class="phoneNumber">手机号查单></a>
            </h2>
            <!-- 输入框 -->
            <div class="form_wrap">
              <input
                type="text"
                placeholder="国内手机号/用户名/邮箱/卡号"
                class="box"
                v-model="username"
                @blur="checkUsername"
              />
              <br />
              <div class="mima">
                <input
                  type="password"
                  placeholder="登录密码"
                  class="paword"
                  v-model="password"
                  @blur="checkPassword"
                />
                <span class="forget ml-5"
                  ><a href="#" class="pass">忘记密码</a></span
                >
              </div>

              <!-- 滑块 通过后执行提交代码-->

              <div class="login-set">
                <input type="checkbox" v-model="isChecked" />30天内自动登录
                <a class="phone">手机动态密码登录<i class="icon-arrowr"></i></a>
              </div>

              <!-- 登录 -->
              <button class="login" @click="login">登 录</button>

              <p class="xieyi">
                登录即代表您同意我们的 <a href="">服务协议 </a>和
                <a href="">隐私政策</a>
              </p>
            </div>
            <!-- 下面的连接图片 -->
            <div class="login-bottom">
              <div class="login-about">
                <a href="#">境外手机</a>
                <span>|</span>
                <a href="#">公司客户</a>
                <span>|</span>
                <a href="#">携程通</a>
                <a href="#" class="free" @click="regist">免费注册</a>
              </div>
              <!-- 下方图标 -->
              <div class="login-other">
                <a href="#" class="a1"></a>
                <a href="#" class="a2"></a>
                <a href="#" class="a3"></a>
                <a href="#" class="a4"></a>
                <a href="#" class="a5"></a>
              </div>
            </div>
          </div>
          <div class="login_ercode" v-else>
            <img
              class="ercode"
              src="../../public/img/er_ctrip_app.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <!-- 登录方式切换按钮 -->
      <a class="changetap">
        <span href="javascript:;" @click="changeTap" v-if="isShow"
          >扫码登录</span
        >
        <span href="javascript:;" @click="changeTap" v-else>账号登录</span>
        <i class="icon-ercode"></i>
      </a>
    </div>
    <!-- 下面导航 -->
    <div class="base_ft_wrap">
      <p class="web-nav">
        <a href="#">网站导航</a> | <a href="">宾馆索引</a> |
        <a href="">用户协议</a> | <a href="#">关于携程</a> |
        <a href="">企业公民</a> | <a href="">诚聘英才</a> |
        <a href="#">分销联盟</a> | <a href="">企业礼品卡采购</a> |
        <a href="">代理合作</a> | <a href="#">广告业务</a> |
        <a href="">联系我们</a> |
        <a href="">返回旧版</a>
      </p>
      <p class="copyright mt-1">
        <a href="">Copyright ©</a>
        <span>1999-2020</span>
        <a href="">ctrip.com</a>
        <span>. All rights reserved.</span>
      </p>
    </div>
  </div>
</template>

<script>
import jwt from "jsonwebtoken";
export default {
  data() {
    return {
      //控制记住密码
      isChecked: false,
      username: "",
      password: "",
      array: [],
      isShow: true,
    };
  },
  methods: {
    //校验用户名的方法
    checkUsername() {
      // let phoneRegExp = /^1[3-8]{1}\d{9}$/;
      let usernameRegExp = /^[0-9A-Za-z]{6,12}$/;
      // let emailRegExp=/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
      // let idCardRegExp=/^([1-9]{1})(\d{14}|\d{18})$/
      if (usernameRegExp.test(this.username)) {
        return true;
      } else {
        alert("您输入的用户名错误");
      }
    },
    //校验密码的方法
    checkPassword() {
      let passwordRegExp = /^[0-9A-Za-z?!$_]{8,20}$/;
      if (passwordRegExp.test(this.password)) {
        //必须返回结果
        return true;
      } else {
        return false;
      }
    },
    //登录功能函数
    login() {
      if (this.checkUsername() && this.checkPassword()) {
        this.axios
          .post("/login", { username: this.username, password: this.password })
          .then((res) => {
            if (res.data.code == 200) {
              //将token信息转化成明文并保存到vuex中
              let token = jwt.decode(res.data.token);
              this.$store.commit("loginOk", token);
              //本地存储将token存到sessionstorage中
              console.log(this.isChecked);
              if (this.isChecked) {
                window.localStorage.setItem("token", res.data.token);
              } else {
                window.sessionStorage.setItem("token", res.data.token);
              }
              this.$message.success("登录成功");
              this.$router.push("/"); //登录成功跳转首页
            } else {
              alert("登录失败");
            }
          });
      }
    },
    //注册功能函数
    regist() {
      if (this.checkUsername() && this.checkPassword()) {
        this.axios
          .post("/regist", { username: this.username, password: this.password })
          .then((res) => {
            if (res.data.code == 200) {
              // console.log(res.data);
              //将token信息转化成明文并保存到vuex中
              let token = jwt.decode(res.data.token);
              this.$store.commit("loginOk", token);
              //本地存储将token存到sessionstorage中
              window.sessionStorage.setItem("token", res.data.token);
              this.open();
            } else {
              // console.log(res.data);
              alert(res.data.message);
            }
          });
      } else {
        alert("账号或密码格式有误");
      }
    },
    changeTap() {
      this.isShow = !this.isShow;
    },
    //注册成功后的弹窗
    open() {
      this.$confirm("注册成功, 是否返回首页?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success",
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          this.$router.push("/login");
        });
    },
  },
};
</script>
<style>
.lg_hd {
  width: 980px;
  height: 90px;
  margin: 0 auto;
  padding: 0 10px;
}
.lg_hd > h1 {
  width: 203px;
  padding-top: 20px;
  margin-right: 10px;
}
.lg_hd a {
  background-color: #0062cc;
  display: block;
  width: 100%;
  height: 34px;
  background: url(https://pic.c-ctrip.com/platform/online/login/c_logo2020.png)
    no-repeat;
  background-size: 100% 100%;
}
.tips-security {
  width: 100%;
  padding: 7px 0;
  background: #fffcd8;
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: -14px;
}
.tips-security > i {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  background-image: url(https://pic.c-ctrip.com/platform/online/login/un_bg_pop.png);
  background-repeat: no-repeat;
  background-position: 0 -191px;
  vertical-align: middle;
}

.tips-security a {
  color: #000000;
}
.lg_banner_wrap {
  width: 100%;
  height: 540px;
  background-image: url(https://dimg04.c-ctrip.com/images/zg051a0000018ihml577E.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position:-200px 0px;
}
.lg_banner_wrap > .mod-box {
  position: relative;
  width: 980px;
  margin: 0 auto;
}
.mod-box > .lg_loginwrap {
  position: relative;
  float: right;
  width: 380px;
  min-height: 540px;
  margin-right: 72px;
}
.lg_banner_wrap .lg_loginbox {
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 4px;
  padding: 30px 30px 20px;
  margin-top: 30px;
  font-size: 12px;
}
.lg_loginbox > h2 {
  position: relative;
  padding-bottom: 16px;
  line-height: 1;
  font-size: 18px;
  color: #111;
  margin-bottom: 6px;
}
.lg_loginbox .phoneNumber {
  position: absolute;
  right: 0;
  font-size: 12px;
  color: #666;
}
.form_wrap .box {
  width: 100%;
  height: 40px;
  padding: 8px 0;
  padding: 5px 5px 5px 13px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: 0;
  margin-bottom: 16px;
}
.form_wrap > .mima {
  width: 100%;
  height: 40px;
  outline: 0;
  border: 1px solid #ccc;
  padding: 5px 5px 5px 13px;
  font-size: 14px;
  margin-bottom: 16px;
}
.form_wrap .paword {
  width: 200px;
  border: none;
  font-size: 14px;
  outline: 0;
  padding: 4px 0;
}

.pass {
  font-size: 12px;
  color: #666;
}
.login-set {
  position: relative;
  margin-bottom: 13px;
}
.login-set > .phone {
  position: absolute;
  right: 0;
  color: #666;
}
.phone > .icon-arrowr {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-position: 0 0;
  background-image: url(https://pic.c-ctrip.com/platform/online/login/un_login_20170818.png);
  background-image: cover;
  margin-left: 2px;
  vertical-align: -1px;
}

.form_wrap .login {
  width: 100%;
  height: 42px;
  color: #fff;
  cursor: pointer;
  background-color: #ff9a14;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
}
.xieyi {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: #999;
}
.xieyi > a {
  color: #999;
  border-bottom: 1px dotted #999;
}
.login-bottom {
  margin-top: 52px;
}
.login-bottom > .login-about {
  margin-bottom: 20px;
}
.login-bottom a {
  color: #666;
  text-decoration: none;
  cursor: pointer;
}
.login-bottom span {
  padding: 0 8px;
  color: #ccc;
}
.login-about > .free {
  float: right;
  color: #3882e5;
}
.login-other > .a1 {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 18px;
  background: url(https://pic.c-ctrip.com/platform/online/login/un_login_third.png)
    no-repeat;
  background-position: 0 0;
}
.login-other > .a2 {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 18px;
  background: url(https://pic.c-ctrip.com/platform/online/login/un_login_third.png)
    no-repeat;
  background-position: -35px 0;
}
.login-other > .a3 {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 18px;
  background: url(https://pic.c-ctrip.com/platform/online/login/un_login_third.png)
    no-repeat;
  background-position: -70px 0;
}
.login-other > .a4 {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 18px;
  background: url(https://pic.c-ctrip.com/platform/online/login/un_login_third.png)
    no-repeat;
  background-position: -105px 0;
}
.login-other > .a5 {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 18px;
  background: url(https://pic.c-ctrip.com/platform/online/login/un_login_third.png)
    no-repeat;
  background-position: -140px 0;
}
.base_ft_wrap {
  width: 980px;
  margin: 0 auto;
  margin-top: 55px;
  border-top: 1px dashed #9eccf5;
}
.web-nav {
  color: #4c4c4c;
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
}
.web-nav a {
  color: #4c4c4c;
  white-space: nowrap;
  text-decoration: none;
}
.copyright {
  color: #4c4c4c;
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
  margin-top: 0;
}
.copyright a {
  color: #4c4c4c;
}
.changetap {
  font-size: 13px;
  position: relative;
  color: #fff !important;
  line-height: 16px;
  padding: 9px;
  width: 32px;
  height: 104px;
  top: 30px;
  left: 1180px;
  background: #3882e5;
}
.icon-ercode {
  background: url("/img/un_login_20170818.png") no-repeat -20px 0px;
  display: block;
  width: 13px;
  height: 13px;
  margin-top: 3px;
}
.changetap {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
}
.login_ercode {
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 4px;
  padding: 30px 30px 20px;
  margin-top: 30px;
  width: 380px;
  height: 425px;
}
.ercode {
  width: 60%;
  margin: 50px 50px;
}
</style>
