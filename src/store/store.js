import { createStore } from 'vuex';
import actions from './actions/actions';
import mutations from './mutations/mutations';
import getters from './getters/getters';
import createPersistedState from 'vuex-persistedstate';

// Глобальная база знаний приложения
const store = createStore({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  // state (состояние) - здесь хранятся все переменные, объекты и тд.
  state: {
    products: [],
    cart: [],
  },
  // mutations (синхронные, выполняются по одной) - необходимы для изменения state
  mutations,
  // actions (действия) - необходимы для придания mutations ассинхронности
  actions,
  // getters - короткий путь получения данных
  getters,
});

export default store;
