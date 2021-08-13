<template>
  <tr>
    <td class="product-checkout-name">
      {{ productCheckout.name }}
    </td>
    <td class="product-checkout-size">
      {{ productCheckout.size }}
    </td>

    <td class="product-checkout-color">
      {{ productCheckout.color }}
    </td>

    <td class="product-checkout-quantity">
      {{ productCheckout.quantity }}
    </td>

    <td class="product-checkout-quantity">
      {{ productCheckout.price * productCheckout.quantity }} тг.
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductCheckout',
  props: {
    productCheckout: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {},
};
</script>

<style>
.table {
  border-color: #dee2e6;
  background: #eee;
}
.table > :not(:last-child) > :last-child > *,
tbody,
td,
tfoot,
th,
thead,
tr {
  border: none;
}
.form-control {
  border: 1px solid #eee;
}
.form-control:disabled,
.form-control[readonly] {
  background-color: #eee;
}
.product-checkout {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}
.product-checkout-image {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 200px;
}
</style>
