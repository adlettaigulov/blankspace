<template>
  <div class="delivery">
    <h1>Доставка</h1>
    <p>
      Мы находимся в городе Алматы. <br />
      Бесплатная доставка по городу первым клиентам (в квадрате города).
      <br />
      Доставка осуществляется день в день, если заказ был оформлен и оплачен до
      <strong> 12:00.</strong>
    </p>
    <p>
      Заказы оформленные и оплаченные после <strong>12:00</strong> доставляются
      на следующий день. <br />
      Отправка в регионы осуществляется через Казпочту до отделения.
    </p>
    <a
      href="https://post.kz/calc"
      target="_blank"
      rel="nofollow"
      class="external-link"
    >
      <i class="icon icon-external-link" data-feather="external-link"></i>
      Рассчитать стоимость доставки
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {
    feather.replace();
  },
};
</script>

<style>
.delivery {
  width: 60%;
  margin: 0 auto;
}
.delivery p {
  text-align: left;
}
.external-link {
  font-weight: bold;
  text-align: left;
  display: block;
}
.icon-external-link {
  height: 18px !important;
  width: 18px !important;
  margin-top: -5px;
}
</style>
