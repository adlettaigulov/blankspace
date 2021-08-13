<template>
  <div class="wrapper container">
    <Banner v-show="isShow" @closeBanner="closeBanner" />
    <!-- Скрытие меню в админ панели -->
    <Navbar v-show="$route.name !== 'admin'" />
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from './components/Widget/Banner.vue';
import Navbar from './components/Widget/Navbar.vue';
import Catalog from './components/Catalog/Catalog.vue';
import Delivery from './components/Static/Delivery.vue';
import Payment from './components/Static/Payment.vue';
import Cart from './components/Cart/Cart.vue';
import Checkout from './components/Checkout/Checkout.vue';
import PageNotFound from './components/Static/PageNotFound.vue';

export default {
  name: 'App',
  components: {
    Banner,
    Navbar,
    Catalog,
    Delivery,
    Payment,
    Cart,
    Checkout,
    PageNotFound,
  },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {},
  methods: {
    closeBanner() {
      this.isShow = false;
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style>
/* Общие стили приложения */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-bottom: 30px;
}
a,
a:hover {
  color: #000;
}
h1 {
  font-weight: bold;
  padding-bottom: 30px;
}
.form-check-input[type='radio'],
.form-control {
  border-radius: 0;
}
.form-control:focus {
  box-shadow: none;
  border-color: #000;
}
.accordion-button:not(.collapsed) {
  color: #000;
  background: #eee;
  box-shadow: none;
}
.icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
.btn {
  font-weight: bold;
  border-radius: 0;
}
.btn-outline-dark {
  color: #000;
  border-color: #000;
}
.btn-outline-dark:hover {
  background-color: #000;
  border-color: #000;
}
.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
  box-shadow: none;
  color: #000;
  opacity: 1;
}
.form-check-input:checked {
  background-color: #000;
  border-color: #000;
}
.text-muted {
  color: #bbbbbb !important;
}

/* Стили для экранов до 576px */
@media (max-width: 575.98px) {
  h1 {
    padding-bottom: 15px;
  }
  .icon {
    height: 30px;
    width: 30px;
  }
  .close-button {
    margin-top: 10px !important;
  }
  .cart-footer {
    padding: 15px;
  }
  .cart-footer .nav {
    justify-content: center !important;
  }
  .cart-total-title strong {
    display: block;
  }
  .delivery,
  .about,
  .payment {
    width: 100% !important;
    padding: 0 15px;
  }
  .carousel {
    display: none;
  }
  .product {
    margin: 0 auto !important;
    padding: 25px !important;
    border: none;
  }
  .card-body,
  .product-material {
    text-align: center;
  }
  .card-body .btn {
    margin-bottom: 20px;
  }
  .product-name {
    padding-top: 15px;
  }
  .product-availability {
    display: none;
  }
  .product-size {
    padding-bottom: 15px;
  }
  .product-size,
  .product-color {
    text-align: center;
  }
  .product-details {
    padding-top: 5px;
    padding-bottom: 15px;
  }
  .product-image {
    min-height: 300px;
    border-radius: 8px !important;
  }
  .btn {
    margin: 0 auto;
  }
  .product-cart {
    text-align: center;
    background: #eee;
    padding: 25px 0 5px 0;
    margin-bottom: 15px;
    border-radius: 0;
  }
  .product-cart div {
    padding-bottom: 20px;
  }
  .go-to-checkout a {
    padding: 0;
  }
  .cart {
    margin-bottom: 150px;
  }
  .cart-total-title {
    padding-top: 0;
  }
  .checkout {
    padding: 0 20px;
  }
  .table-scroll-note {
    display: block !important;
  }
  .modal-dialog {
    margin: 0;
  }
  .modal-dialog-scrollable .modal-content {
    height: 100vh;
  }
  .modal-content {
    border-radius: 0;
  }
  .modal-footer .btn {
    margin-top: 20px;
  }
  /* Чтобы не было пробелов сверху и снизу */
  .modal-dialog-scrollable {
    height: 100%;
  }
}

@media screen and (min-width: 1024px) {
  /* Чтобы меню не прыгало в desktop */
  .collapse {
    display: block;
    height: auto !important;
    visibility: visible;
  }
  .collapsing {
    position: relative;
    height: unset !important;
    overflow: hidden;
  }
}

@media (max-width: 767.98px) {
  .product-background-image {
    min-height: 300px;
  }
}

@media (max-width: 991.98px) {
  .logo-collage {
    display: none;
  }
}

@media (max-width: 1199.98px) {
}

@media (max-width: 1399.98px) {
}
</style>
