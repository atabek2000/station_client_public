<template>
  <div>
    <div class="news-block container">
      <img src="/img/brandBlock/trainers.png" alt="" />
      <div class="news-title">Dunk Low SE 'Sashiko - Light Orewood Brown'</div>
      <div class="news-description">
        The Nike Dunk Low SE ‘Sashiko Light Orewood Brown’ gives the heritage
        hoops shoe an artisanal makeover...
      </div>
      <div class="buy-button">
        <NuxtLink to="/catalog">
          <ButtonBlack><span class="text-upper">Купить</span></ButtonBlack>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.news-block {
  margin-top: 30px;
}
.news-block img {
  width: 100%;
  margin: 0 auto;
}
.news-title {
  font-size: 48px;
  font-weight: bolder;
}

.news-description {
  font-size: 24px;
}

.buy-button {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
}

.buy-button .black-button {
  width: 400px;
  padding: 10px 0;
}
</style>
