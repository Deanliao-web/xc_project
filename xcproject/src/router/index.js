import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Login from "../views/Login.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Index,
  },
  {
    path: "/details/:name",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Details" */ "../views/Details.vue"),
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

// 挂载路由前置导航守卫，在登录首页后进行判断操作
router.afterEach((to, from, next) => {
  // to表示要访问的路径
  // from表示从哪个路径跳转而来
  // console.log(from);
  // if (from.path === "/") return;
  // if (from.path === "/login") return;

  // next是放行函数，next()表示放行，next('/login')表示强制跳转
  // 如果访问登录页面直接放行
    if (to.path === "/details/isa") {
    //如果访问有权限的页面，要先判断是否有token,才能放行
    //提前获取用户信息
    const Str1 = window.sessionStorage.getItem("token");
    const Str2 = window.localStorage.getItem("token");

    if (!Str1 && !Str2) {
      //如果没有用户信息强制跳转到登录界面
      router.replace("/login");
      alert("请登陆后在访问详情页");
    }
    // 如果存在用户信息就放行;
  }
});

export default router;
