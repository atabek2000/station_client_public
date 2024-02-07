<template>
  <a-carousel arrows>
    <div v-for="item in 4" :key="item">
      <div class="carousel-inner">
        <img src="/shoes.jpeg" />
      </div>
    </div>
  </a-carousel>
</template>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.carousel-inner {
  display: flex;
  justify-content: center;
}

.carousel-inner img {
  height: 100%;
  width: 100%;
  /* border-radius: 20px; */
}
</style>
