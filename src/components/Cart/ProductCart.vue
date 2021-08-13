<template>
  <div class="product-cart row align-items-center">
    <div class="product-cart-name align-middle col-md-2">
      Наименование: <br />
      <strong>{{ productCart.gender }} {{ productCart.name }}</strong>
    </div>

    <div class="product-cart-size col-md-2">
      Размер: <br />
      <strong>{{ productCart.size }}</strong>
    </div>

    <div class="product-cart-color col-md-2">
      Цвет: <br />
      <strong>{{ productCart.color }}</strong>
    </div>

    <div class="product-cart-quantity col-md-2">
      Количество: <br />
      <span @click="decrement"
        ><i class="icon icon-minus" data-feather="minus"></i
      ></span>
      <strong>{{ productCart.quantity }}</strong>
      <span @click="increment"
        ><i class="icon icon-plus" data-feather="plus"></i
      ></span>
    </div>

    <div class="product-cart-price col-md-2">
      Цена: <br />
      <strong>{{ productCart.price * productCart.quantity }} тг.</strong>
    </div>

    <div class="product-cart-delete col-md-2">
      <button class="btn btn-outline-dark" @click="deleteFromCart">
        Убрать
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCart',
  props: {
    productCart: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
    increment() {
      this.$emit('increment');
    },
    decrement() {
      this.$emit('decrement');
    },
  },
  computed() {},
  mounted() {
    feather.replace();
  },
};
</script>

<style>
.product-cart {
  background: #eee;
  padding: 20px;
  text-align: left;
  margin-bottom: 20px;
}
.product-cart-image {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 200px;
}
.product-cart-quantity i {
  cursor: pointer;
}
.product-cart-delete button {
  line-height: 1.3;
}
.product-cart .icon {
  width: 18px !important;
  height: 18px !important;
  cursor: pointer;
}
.product-cart .icon-plus,
.product-cart .icon-minus {
  margin-top: -4px;
}
</style>
