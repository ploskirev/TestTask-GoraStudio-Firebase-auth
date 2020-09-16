import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    error: ''
  },
  getters: {
    auth: state => state.isAuth,
    err: state => state.error,
  },
  mutations: {
    changeAuth(state) {
      state.isAuth = !state.isAuth;
    },
    setError(state, message) {
      state.error = message;
    }
  },
  actions: {
    async login({commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        commit('changeAuth');
        commit('setError', '');
        setTimeout(() => {
          router.push('/');
        }, 14000);
      } catch (err) {
        console.log(err);
        commit('setError', err.message);
      }
    },
    async logout({commit}) {
      try {
        await firebase.auth().signOut();
        commit('changeAuth');
        router.push('/login');
      } catch (err) {
        console.log(err);
      }
    }
  }
});
