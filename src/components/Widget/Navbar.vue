<template>
  <nav class="navbar sticky-top navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/catalog">Blankspace</a>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i class="icon icon-menu" data-feather="menu"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" :to="{ name: 'catalog' }"
            >Каталог</router-link
          >
          <router-link class="nav-link" :to="{ name: 'delivery' }"
            >Доставка</router-link
          >
          <router-link class="nav-link" :to="{ name: 'payment' }"
            >Оплата</router-link
          >
          <router-link class="nav-link" :to="{ name: 'about' }"
            >О нас</router-link
          >
          <a
            class="nav-link"
            href="https://www.instagram.com/blankspace.kz/"
            target="_blank"
            ><i class="icon icon-instagram" data-feather="instagram"></i
          ></a>
          <router-link class="nav-link" :to="{ name: 'cart' }">
            <i class="icon icon-bag" data-feather="shopping-bag"></i>
            <span class="cart-quantity" v-if="cart.length">{{
              cart.length
            }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Product from '../Catalog/Product.vue';
import Cart from '../Cart/Cart.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'Navbar',
  components: {
    Product,
    Cart,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['cart']),
  },
  methods: {},
  mounted() {
    // Сворачивание меню при клике
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNavAltMarkup');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {
      toggle: false,
    });
    navLinks.forEach((l) => {
      l.addEventListener('click', () => {
        bsCollapse.toggle();
      });
    });
  },
};
</script>

<style>
.navbar {
  background: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 25px 0;
}
.navbar-nav .nav-link {
  padding-left: 20px !important;
  color: #000;
}
.icon-bag,
.icon-instagram {
  margin-top: -4px;
}
.icon-menu {
  height: 28px !important;
  width: 28px !important;
  stroke: #000 !important;
  stroke-linecap: inherit !important;
  stroke-linejoin: inherit !important;
}
.cart-quantity {
  padding-left: 5px;
}
</style>
