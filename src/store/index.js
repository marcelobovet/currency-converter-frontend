import { createStore } from 'vuex'
import router from '@/router';

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
        router.push({ name: 'conversor' })
      }
    }
  },
  actions: {
    guardarUsuario({ commit }, payloadToken) {
      localStorage.setItem('token', payloadToken)
      commit('obtenerUsuario', payloadToken)
    },
    cerrarSesion({ commit }) {
      commit('obtenerUsuario', '');
      localStorage.removeItem('token')
      router.push('/signin')
    },
    leerToken({ commit }) {
      const token = localStorage.getItem('token')
      if (token) {
        commit('obtenerUsuario', token)
      } else {
        commit('obtenerUsuario', '')
      }
    },
  },
  getters: {
    isActive: state => !!state.token
  },

  modules: {

  }
})
