import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/auth';
import './styles/reset.css';

Vue.config.productionTip = false;
Vue.config.devtools = true;

firebase.initializeApp({
  apiKey: "AIzaSyAbDbpYUHNVeocpZy80ioVdX6uaFSP2h9U",
  authDomain: "gora-task.firebaseapp.com",
  databaseURL: "https://gora-task.firebaseio.com",
  projectId: "gora-task",
  storageBucket: "gora-task.appspot.com",
  messagingSenderId: "1080487740945",
  appId: "1:1080487740945:web:54c1d285fa7aa3cf9493b0"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
