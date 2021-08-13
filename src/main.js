import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyDbQ14C55rmmTw0MzWYxTV8Qb2FYOU5o9Y',
  authDomain: 'blankspacekz.firebaseapp.com',
  databaseURL: 'https://blankspacekz-default-rtdb.firebaseio.com',
  projectId: 'blankspacekz',
  storageBucket: 'blankspacekz.appspot.com',
  messagingSenderId: '1011620240049',
  appId: '1:1011620240049:web:140e32b231d13aa510e090',
  measurementId: 'G-DNDD996RW5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).use(store).mount('#app');
