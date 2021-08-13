<template>
  <div class="404">
    <h1>
      Страница не найдена
      <i class="icon icon-compass" data-feather="compass"></i>
    </h1>
    <p>
      <a href="/catalog"
        ><button class="btn btn-outline-dark">Вернуться в каталог</button>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  mounted() {
    feather.replace();
  },
};
</script>

<style>
.icon-arrow-left {
  height: 18px !important;
  width: 18px !important;
  margin-top: -3px;
}
</style>
