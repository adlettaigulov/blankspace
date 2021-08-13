export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    // Наполнение массива products в state новыми данными
    state.products = products;
  },
  // Если товар уже есть в корзине, увеличить его количество
  SET_CART: (state, product) => {
    let isProductExist = false;
    state.cart.map(function (item) {
      if (item.id === product.id && item.size === product.size) {
        isProductExist = true;
        item.quantity++;
      }
    });
    isProductExist || state.cart.push({ ...product, quantity: 1 });
  },
  DELETE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
};
