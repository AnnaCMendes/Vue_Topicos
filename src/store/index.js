import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    autorizacao: 'ROLE_USER'
  },
  getters: {
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setAutorizacao(state, autorizacao) {
      state.autorizacao = autorizacao;
    },
    logout(state) {
      state.token = null;
      state.autorizacao = 'ROLE_USER';
    }
  },
  actions: {
  },
  modules: {
  }
})
