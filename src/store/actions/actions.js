import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default {
  ADD_TO_CART({ commit }, product) {
    commit('SET_CART', product);
  },
  DELETE_FROM_CART({ commit }, index) {
    commit('DELETE_FROM_CART', index);
  },
  INCREMENT_CART_PRODUCT({ commit }, index) {
    commit('INCREMENT', index);
  },
  DECREMENT_CART_PRODUCT({ commit }, index) {
    commit('DECREMENT', index);
  },
  GET_PRODUCTS_FROM_API({ commit }) {
    const dbRef = firebase.database().ref();
    dbRef
      .child('products')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          let products = Object.values(snapshot.val());
          console.log(products);
          commit('SET_PRODUCTS_TO_STATE', products);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
