import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import MyHeader from "./components/MyHeader";
import MyHeaderlogin from "./components/MyheaderLogin";
import MyFooter from "./components/MyFooter";
import qs from "qs";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { Swipe, SwipeItem } from "vue-swipe";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import store from "./store";

Vue.config.productionTip = false;
Vue.prototype.qs = qs;
Vue.component("my-header", MyHeader);
Vue.component("my-footer", MyFooter);
Vue.component("my-headerlogin", MyHeaderlogin);

//引入element-UI组件
Vue.use(ElementUI);

//设置服务器统一基础路径
axios.defaults.baseURL = "http://localhost:3030";
//设置接送server统一基础路径并将其放到vue的原型对象中调用
export const instance = axios.create({ baseURL: "http://localhost:3000" });

// 添加请求拦截器,自动将token加入到请求头中
axios.interceptors.request.use(
  (config) => {
    console.log("进入请求拦截器...");
    //this.axios.post(
    //"user/signin",
    //{uname:dingding , upwd:123456}
    //)
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    if (sessionStorage.getItem("token")) {
      config.headers.token = sessionStorage.getItem("token");
    }
    return config;
  },
  (error) => {
    console.log("===发送请求拦截器报错===");
    console.log(error);
    console.log("===end===");
    Promise.reject(error);
  }
);

//添加响应拦截器
axios.interceptors.response.use(
  (res) => {
    console.log("触发响应拦截器...");
    //token失效或错误，清除已有的token
    if (res.data.status == 403) {
      sessionStorage.removeItem("token");
      store.commit("loginOk", false);
      alert("token出错，请重新登录");
      this.$router.push("/login");
    }
    // if(res.data.code==-1)
    //未登录情况下发请求没有token,由于设置了导航守卫所以此情况暂不会出现
    // store.commit("setIslogin",false);
    // alert(" 请先登录 !");
    else if (res.data.token) {
      //如果收到正确的token,将对应信息存储到相应位置
      store.commit("loginOk", res.data.uname);
      store.commit("loginOk", true);
      //如果选择保存30天选项应该多一个remember选项，后续加上
    }
    return res;
  },
  (error) => {
    console.log(error);
  }
);

//将axios添加到原型对象中
Vue.prototype.axios = axios;
Vue.prototype.instance = instance;

//引入swipe组件
Vue.component("swipe", Swipe);
Vue.component("swipe-item", SwipeItem);

Vue.component("vue-slick-carousel", VueSlickCarousel);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
