import { createStore } from 'vuex'

// para decodificar el jwt
import decode from 'jwt-decode'

export default createStore({
  state: {
    token: '',
    usuarioDB: ''
  },
  mutations: {
    obtenerUsuario(state, payloadToken) {
      state.token = payloadToken;
      if (payloadToken === '') {
        state.usuarioDB = ''
      } else {
        state.usuarioDB = decode(payloadToken);
      }
    }
  },
  actions: {
    guardarUsuario({ commit }, payloadToken) {
      localStorage.setItem('token', payloadToken)
      commit('obtenerUsuario', payloadToken)
    }
  },
  modules: {

  }
})
