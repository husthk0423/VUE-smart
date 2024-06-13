import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initVisible: false,
    screenSize: 'normal'// 'big' | 'normal',
  },
  getters: {
    getScreenSize(state) {
      return state.screenSize
    },
    getInitVisible(state) {
      return state.initVisible
    }
  },
  mutations: {
    changeScreenSize(state, sizeString) {
      state.screenSize = sizeString
    },
    changeInitVisible(state, visible) {
      state.initVisible = visible
    }
  },
  actions: {
  },
  modules: {
  }
})
