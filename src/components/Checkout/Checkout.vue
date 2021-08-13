<template>
  <div class="checkout">
    <h1>Оформление заказа</h1>
    <p>
      Пожалуйста тщательно проверьте введенные сведения перед оформлением
      заказа.
    </p>

    <h3>Информация о заказе</h3>
    <p class="table-scroll-note">
      <i class="icon icon-chevrons-left" data-feather="arrow-left"></i>
      Таблицу можно скроллить горизонтально
      <i class="icon icon-chevrons-right" data-feather="arrow-right"></i>
    </p>
    <!-- Форма заказа -->
    <form
      class="checkout-form row g-3"
      @submit.prevent="sendEmail"
      v-on:submit="showModal = true"
    >
      <div class="table-responsive-sm">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Наименование</th>
              <th scope="col">Размер</th>
              <th scope="col">Цвет</th>
              <th scope="col">Количество</th>
              <th scope="col">Цена</th>
            </tr>
          </thead>
          <tbody>
            <ProductCheckout
              v-for="product in cart"
              :key="product.id"
              :productCheckout="product"
            />
          </tbody>
        </table>
      </div>
      <div class="col-md-3">
        <label class="form-label">1. Имя</label>
        <input
          type="text"
          class="form-control"
          placeholder="Имя"
          name="name"
          required
        />
      </div>

      <div class="col-md-3">
        <label class="form-label">2. Город</label>
        <input
          type="text"
          class="form-control"
          placeholder="Город"
          name="city"
          required
        />
      </div>
      <div class="col-md-3">
        <label class="form-label">3. Телефон</label>
        <input
          type="text"
          class="form-control"
          placeholder="Телефон"
          name="phone"
          required
        />
      </div>
      <div class="col-md-3">
        <label class="form-label">4. Итого</label>
        <input
          type="text"
          class="form-control"
          :value="cartTotal"
          name="total"
          readonly
        />
      </div>
      <div class="col-md-12">
        <input
          type="textarea"
          class="form-control d-none"
          name="product"
          :value="getAllProductsFromCheckout"
        />
      </div>
      <div class="col-12">
        <button class="btn btn-outline-dark" type="submit">
          Оформить заказ
        </button>
      </div>
    </form>

    <Modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        Спасибо за покупку <i class="icon icon-heart" data-feather="heart"></i>
      </template>
      <template v-slot:body>
        <p>
          Заказ принят! <br />
          Наш менеджер свяжется с вами в ближайшее время.
        </p>
      </template>
    </Modal>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init('user_bb7iM4eOZt9C4oaKFTjI7');
import { mapGetters } from 'vuex';
import ProductCheckout from '../Checkout/ProductCheckout.vue';
import Modal from '../Widget/Modal.vue';
export default {
  name: 'Checkout',
  components: {
    ProductCheckout,
    Modal,
  },
  computed: {
    // Общая сумма заказа
    cartTotal() {
      return (
        this.cart.reduce((res, item) => res + item.price * item.quantity, 0) +
        ' тг.'
      );
    },
    // Получение все товаров из корзины и добавление их в форму с последующей отправкой
    getAllProductsFromCheckout() {
      const products = this.cart;
      const arr = [];
      products.forEach((product) => {
        arr.push(
          product['name'],
          product['color'],
          product['size'],
          product['price'],
          product['quantity']
        );
        console.log(arr);
      });
      return arr;
    },
    ...mapGetters(['cart']),
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          'service_vgz66f8',
          'template_ol1be8s',
          e.target,
          'user_bb7iM4eOZt9C4oaKFTjI7'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text);
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style>
.checkout-form {
  padding-top: 10px;
}
.checkout p {
  margin-bottom: 15px;
}
.checkout form label {
  font-weight: bold;
}
.checkout h1,
.checkout a {
  padding: 0;
}
.checkout .btn {
  margin-top: 15px;
}
.checkout-total {
  padding-top: 20px;
}
.checkout h3 {
  padding-top: 20px;
  font-weight: bold;
}
.icon-heart {
  margin-top: -2px;
}
.icon-chevrons-left,
.icon-chevrons-right {
  height: 20px !important;
  width: 20px !important;
  margin-top: -4px;
}
.table-scroll-note {
  display: none;
}
</style>
