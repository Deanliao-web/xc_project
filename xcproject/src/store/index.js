import Vue from "vue";
import Vuex from "vuex";

import jwt from "jsonwebtoken";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username:
      sessionStorage.getItem("token") || localStorage.getItem("token")
        ? jwt.decode(sessionStorage.getItem("token")) ||
          jwt.decode(localStorage.getItem("token"))
        : "",
    islogin:
      sessionStorage.getItem("token") || localStorage.getItem("token") ? 1 : 0,
  },
  mutations: {
    loginOk(state, payload) {
      if (!payload) {
        //如果toklen出错islogin = 0
        state.islogin = 0;
      } else {
        state.username = payload;
        state.islogin = 1;
      }
    },
  },
  actions: {},
  modules: {},
});
