<template>
  <div class="cart">
    <h1>Корзина</h1>
    <p v-if="!cart.length">
      Корзина пуста <i class="icon icon-frown" data-feather="frown"></i>
    </p>
    <ProductCart
      v-for="(product, index) in cart"
      :key="product.id"
      :productCart="product"
      @deleteFromCart="deleteFromCart(index)"
      @decrement="decrement(index)"
      @increment="increment(index)"
    />
    <div class="cart-footer">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <p class="cart-total-title">
            Сумма заказа: <strong>{{ cartTotal }} тг.</strong>
          </p>
        </li>
        <li class="nav-item" v-if="cartTotal !== 0">
          <div class="go-to-checkout">
            <router-link class="nav-link" :to="{ name: 'checkout' }"
              ><button class="btn btn-outline-dark">
                Перейти к оформлению заказа
              </button>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductCart from './ProductCart.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Cart',
  components: {
    ProductCart,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    // Вычисление общей суммы заказа
    cartTotal() {
      return this.cart.reduce(
        (res, item) => res + item.price * item.quantity,
        0
      );
    },
    // Получение массива cart
    ...mapGetters(['cart']),
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_PRODUCT',
      'DECREMENT_CART_PRODUCT',
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_PRODUCT(index);
    },
    decrement(index) {
      this.DECREMENT_CART_PRODUCT(index);
    },
  },
  watch: {},
  mounted() {
    feather.replace();
  },
};
</script>

<style>
.cart {
  margin-bottom: 120px;
}
.go-to-catalog {
  text-align: left;
}
.cart-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px 0;
  background: #eee;
  clear: both;
}
.cart-total-title {
  font-size: 1.1rem;
  display: block;
  padding: 0.5rem 3rem;
  margin: 0;
}
.go-to-checkout a {
  padding: 2px 3rem 0 0;
}
.icon-frown {
  margin-top: -4px;
  margin-left: 2px;
}
</style>
