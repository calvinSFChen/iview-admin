import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import user from './module/user'
import app from './module/app'
import menus from './module/menus'
import media from './module/media'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  plugins: [
    new VuexPersistence({
      reducer: (state) => ({
        user: state.user, // 这个就是存入localStorage的值
        app: state.app,
        menus: state.menus,
        media: state.media
        // menu: state.menu,
        // userInfo: state.userInfo,
        // userLevel: state.userLevel,
        // order: state.order,
        // media: state.media,
        // kefu: state.kefu,
        // integralOrder: state.integralOrder,
        // mobildConfig: state.mobildConfig,
        // upgrade: state.upgrade,
        // layout: state.layout
      }),
      storage: window.localStorage
    }).plugin
  ],
  modules: {
    user,
    app,
    menus,
    media
  }
})
