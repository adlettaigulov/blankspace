<template>
  <div class="about">
    <h1>О нас</h1>
    <div class="collage">
      <div class="logo-collage">Blankspace</div>
      <strong>Blankspace</strong> (дословно "пустое пространство") <br />
      Молодой бренд одежды, отличительной чертой которого является минимализм.
      <br />
      На данный момент мы специализируемся только на футболках, но в скором
      времени собираемся расширить ассортимент товаров.
      <div class="logo">
        <img src="/images/logo.png" alt="" />
        <p>Логотип бренда</p>
      </div>
    </div>
    <div class="map">
      <h4>Как нас найти</h4>
      <p>Мы находимся по адресу: Аксай 4, дом 123.</p>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A7049276655eb60944315ebfe345f6b9acf88e83153d2970049ca351ed9f077ee&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
      ></iframe>
    </div>
    <div class="elfsight-app-24e60a15-bcfa-4a2f-96e6-dd62255ef84c"></div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style>
.about {
  width: 70%;
  margin: 0 auto;
}
.about h1 {
  padding-bottom: 30px;
}
.logo {
  padding: 30px 0 0 0;
}
.logo img {
  margin: 0 auto;
  max-width: 100%;
}
.logo p {
  padding: 15px 0 0 0;
}
.map {
  padding-top: 15px;
}
.map h4 {
  padding-bottom: 15px;
  font-weight: bold;
}
.logo-collage {
  font-family: 'Poppins', sans-serif;
  font-size: 100px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1;
  padding-bottom: 50px;
  margin: 0;
  background: url('/images/pattern.jpg');
  background-size: 40%;
  background-position: 50% 50%;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0.08);
  animation: zoomout 5s ease 500ms forwards;
}

@keyframes zoomout {
  from {
    background-size: 40%;
  }
  to {
    background-size: 10%;
  }
}
</style>
