<script setup>
const runtimeConfig = useRuntimeConfig();

const { data: brands } = await useAsyncData(() =>
  $fetch(runtimeConfig.public.API_URL + "main_products/")
);

const { data: news } = await useAsyncData(() =>
  $fetch(runtimeConfig.public.API_URL + "news/")
);

const videoOptions = {
  autoplay: true,
  controls: false,
  loop: true,
  preload: "auto",
  muted: true,
  sources: [
    {
      src: "/video/station_store.mov",
      type: "video/mp4",
    },
  ],
};
</script>

<template>
  <div>
    <!-- <div class="some">
      <ShopCarousel />
      <ShopStory />
      <ShopBrandBlock />
      <ShopNews />
    </div> -->
    <div class="main-image">
      <!-- <img src="/img/main/sneakers.png" alt="" style="width: 100%" /> -->
      <!-- <img src="/img/main/anim.png" alt="" style="width: 100%" /> -->
      <VideoPlayer :options="videoOptions" />
    </div>
    <div class="main-image-mobile">
      <!-- <img src="/img/main/anim-mobile.png" alt="" style="width: 100%" /> -->
      <VideoPlayer :options="videoOptions" />
    </div>
    <div class="story-block">
      <div class="story-wrapper">
        <div class="story-block-element">
          <div class="story-block-image">
            <img src="/img/storyBlock/celebrity.png" alt="" />
          </div>
          <div class="story-block-text"></div>
        </div>
        <div class="story-block-element">
          <div class="story-block-image">
            <img src="/img/storyBlock/aboutus.png" alt="" />
          </div>
          <div class="story-block-text"></div>
        </div>
        <div class="story-block-element">
          <div class="story-block-image">
            <img src="/img/storyBlock/new.png" alt="" />
          </div>
          <div class="story-block-text"></div>
        </div>
        <div class="story-block-element">
          <div class="story-block-image">
            <img src="/img/storyBlock/hot.png" alt="" />
          </div>
          <div class="story-block-text"></div>
        </div>
        <div class="story-block-element">
          <div class="story-block-image">
            <img src="/img/storyBlock/where.png" alt="" />
          </div>
          <div class="story-block-text"></div>
        </div>
      </div>
    </div>
    <div class="brand-block" v-for="brand in brands" :key="brand.name">
      <div class="brand-logo-block">
        <div class="brand-logo">
          <img :src="runtimeConfig.public.API_HOST + brand.image" alt="" />
        </div>
        <div class="show-all-block">
          <NuxtLink :to="'/catalog?brand=' + brand.id" class="show-all-button"
            >Посмотреть все</NuxtLink
          >
        </div>
      </div>
      <div class="product-wrapper">
        <div class="product-inner-wrapper">
          <div
            class="product-element"
            v-for="product in brand.products"
            :key="product.id"
          >
            <NuxtLink :to="'/product/' + product.slug">
              <ShopProduct_card :product="product" page="main" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="wheels-block">
        <img src="/img/main/wheel.png" alt="wheel" class="wheel-no-mobile" />
        <img src="/img/main/wheel.png" alt="wheel" />
        <img src="/img/main/wheel.png" alt="wheel" class="wheel-no-mobile" />
      </div>
    </div>

    <div class="news-block container" v-for="nw in news" :key="nw.id">
      <a-row :gutter="[24, 16]">
        <a-col :xs="24" :md="nw.text_bottom == '1' ? 24 : 12">
          <img :src="runtimeConfig.public.API_HOST + nw.image" alt="" />
        </a-col>
        <a-col :xs="24" :md="nw.text_bottom == '1' ? 24 : 12">
          <div class="news-text">
            <div class="news-text-upper">
              <div class="news-title">{{ nw.title }}</div>
              <div class="news-description">{{ nw.text }}</div>
            </div>
            <div class="buy-button">
              <NuxtLink :to="nw.link">
                <ButtonBlack
                  ><span class="text-upper see-all"
                    >Посмотреть все товары</span
                  ></ButtonBlack
                >
              </NuxtLink>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 0 80px;
  width: 100%;
  margin: 0 auto;
}

.story-wrapper {
  display: flex;
  justify-content: space-between;
  width: 60%;
  max-width: 860px;
  margin: 10px auto;
  min-width: 300px;
  overflow-x: auto;
}

.show-all-button {
  color: black;
  font-size: 18px;
  font-weight: 700;
}

.show-all-block {
  display: flex;
  align-items: flex-end;
}

.story-block {
  display: none;
}

.story-block-image {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.story-block-image img {
  width: 90%;
}

.brand-block {
  margin-top: 120px;
}

.brand-block .product-wrapper {
  border: 1px solid black;
  padding: 40px 80px;
  border-radius: 30px;
}

.product-inner-wrapper {
  display: flex;
  overflow-x: auto;
  box-shadow: inset -30px 0 20px -10px rgba(255, 255, 255, 0.9),
    inset 30px 0 20px -10px rgba(255, 255, 255, 1);
}

.brand-block .brand-logo-block {
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  margin-bottom: 16px;
}

.brand-block .brand-logo img {
  height: 39px;
}

.brand-block .product-element {
  margin-right: 8px;
  z-index: auto;
}

.product-element a {
  z-index: 10;
  position: relative;
  display: block;
}

.news-block {
  margin-top: 120px;
}
.news-block img {
  width: 100%;
  display: block;
  margin: 0 auto;
  max-width: 1240px;
  max-height: 640px;
}
.news-block .news-title {
  font-size: 48px;
  font-weight: bolder;
}

.news-block .news-description {
  font-size: 24px;
  font-family: "SF-Pro-Display", sans-serif !important;
  font-weight: 400;
}

.news-block .buy-button {
  display: flex;
  margin-top: 32px;
}

.wheels-block {
  display: flex;
  justify-content: space-around;
}

.main-image {
  /* margin-top: 72px; */
  margin-top: 0px;
}

.main-image-mobile {
  display: none;
}

.see-all {
  font-size: 20px;
}

.news-text {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.buy-button .black-button {
  width: fit-content;
  padding: 16px;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
  .news-block .buy-button .black-button {
    width: 100%;
    font-size: 16px;
  }

  .news-block .buy-button {
    display: block;
  }

  .brand-block .product-wrapper {
    padding: 12px 20px;
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .wheel-no-mobile {
    display: none;
  }

  .main-image {
    display: none;
  }
  .main-image-mobile {
    display: block;
    margin-top: 0px;
  }

  .news-block .news-title {
    font-size: 24px;
    line-height: 24px;
    margin-top: 24px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .news-block .news-description {
    font-size: 18px;
    line-height: 21px;
    margin: 0;
    margin-top: 16px;
  }

  .brand-block .brand-logo img {
    height: auto;
    width: 56px;
  }

  .brand-block .brand-logo-block {
    padding: 0 16px;
  }

  .buy-button .black-button {
    width: 100%;
    padding: 16px 0;
  }
}
</style>
