import { createStore } from 'vuex'
import router from '@/router';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate"

export default createStore({
  plugins: [createPersistedState()],
  state: {
    token: '',
    user: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    guardarToken({ commit }, payloadToken) {
      commit('SET_TOKEN', payloadToken)
      localStorage.setItem('token', payloadToken)
    },
    cerrarSesion({ commit }) {
      commit('SET_TOKEN', '');
      commit('SET_USER', null);
      localStorage.removeItem('token');
      router.push('/signin')
    },
    async getMe({ commit }) {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.post('http://localhost:3001/me', {}, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          commit('SET_USER', response.data);
          router.push({ name: 'conversor' })
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    }
  },
  getters: {
    isActive: state => !!state.user,
    user: state => state.user,
    isAdmin: state => state.user.role.name === 'admin' ? true : false
  },
  modules: {

  }
})
