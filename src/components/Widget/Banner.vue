<template>
  <div class="banner">
    <p class="info-area">
      Дорогие посетители, на данный момент мы работаем в тестовом режиме. Заказы
      не обрабатываются.
    </p>
    <button class="close-button btn btn-outline-dark" @click="closeBanner">
      Закрыть
    </button>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  methods: {
    closeBanner() {
      this.$emit('closeBanner');
    },
  },
};
</script>

<style>
.banner {
  background: #eee;
  padding: 15px 0;
}
.info-area {
  margin: 0;
  padding: 0 15px;
}
.close-button {
  margin-top: 10px;
}
</style>
