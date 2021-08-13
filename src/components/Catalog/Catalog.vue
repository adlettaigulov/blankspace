<template>
  <div class="catalog row">
    <Carousel />
    <h1>Все футболки</h1>
    <Product
      v-for="product in products"
      :key="product.id"
      :productData="product"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Carousel from '../Widget/Carousel.vue';
import Product from '../Catalog/Product.vue';

export default {
  name: 'Catalog',
  components: {
    Product,
    Carousel,
  },
  data() {
    return {};
  },
  computed: {
    // Получание с помощью mapGetter PRODUCTS из store.js
    ...mapGetters(['cart', 'products']),
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style></style>
