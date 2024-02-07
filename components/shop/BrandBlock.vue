<template>
  <div>
    <div class="brand-logo-block">
      <div class="brand-logo">
        <img src="/img/brandBlock/nike-logo.png" alt="" />
      </div>
      <div><NuxtLink to="/catalog">Посмотреть все</NuxtLink></div>
    </div>
    <div class="product-wrapper">
      <div class="product-element">
        <ShopProduct_card :product="product" />
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.product-wrapper {
  border: 1px solid black;
  padding: 40px 100px;
  border-radius: 30px;
  display: flex;
  overflow-x: scroll;
}

.brand-logo-block {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 30px;
  margin-top: 30px;
}

.product-element {
  margin-right: 16px;
}
</style>
