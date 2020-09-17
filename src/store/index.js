import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    currentUser: localStorage.getItem('user')
  },
  getters: {
    err: state => state.error,
    user: state => state.currentUser
  },
  mutations: {
    setError(state, message) {
      state.error = message;
    },
    clearError(state) {
      state.error = null;
    },
    setUser(state, user) {
      state.currentUser = user;
    },
    clearUser(state) {
      state.currentUser = '';
    }
  },
  actions: {
    async login({commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        commit('clearError');
        commit('setUser', firebase.auth().currentUser.email);
        localStorage.setItem('user', firebase.auth().currentUser.email);
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
        commit('clearUser');
        localStorage.setItem('user', '');
        router.push('/login');
      } catch (err) {
        console.log(err);
      }
    }
  }
});
