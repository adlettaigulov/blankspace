<template>
  <div class="admin">
    <nav class="navbar sticky-top navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin">Blankspace Admin Panel</a>
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
            <button class="btn btn-outline-dark" @click="signOut">Выйти</button>
          </div>
        </div>
      </div>
    </nav>
    <h1>Страница администрирования</h1>

    <div class="row">
      <div class="col">Товары</div>
      <div>
        <p v-for="product in products" :key="product.id">
          {{ product.id }}
          {{ product.name }}
        </p>
      </div>

      <div>
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Наименование"
              v-model="name"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Описание"
              v-model="description"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Цвет"
              v-model="color"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Размер"
              v-model="size"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Цена"
              v-model="price"
            />
          </div>
          <button
            type="submit"
            class="btn btn-outline-dark"
            @click.prevent="addProduct"
          >
            Добавить
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default {
  name: 'Admin',
  data() {
    return {
      products: [],
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/catalog');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addProduct(name, color, size, price) {
      firebase.database();
      var productsListRef = firebase.database().ref();
      var newProductRef = productsListRef.child('products').push();
      newProductRef.set({
        name: name,
        color: color,
        size: size,
        price: price,
      });
    },
  },
  computed: {},
  mounted() {
    const dbRef = firebase.database().ref();
    dbRef
      .child('products')
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          let products = Object.values(snapshot.val());
          this.products = products;
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style></style>
