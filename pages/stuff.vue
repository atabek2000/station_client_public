<template>
  <div>
    <div class="container">
      <div class="bread-crumb-block"></div>
      <div class="product-retrieve-block">
        <a-row>
          <a-col :md="16" class="product-images">
            <img
              src="/img/brandBlock/Mainimg.png"
              alt=""
              style="width: 100%"
            />
            <a-row>
              <a-col :md="8"
                ><img src="/img/brandBlock/img1.png" alt=""
              /></a-col>
              <a-col :md="8"
                ><img src="/img/brandBlock/img2.png" alt=""
              /></a-col>
              <a-col :md="8"
                ><img src="/img/brandBlock/img3.png" alt=""
              /></a-col>
            </a-row>
          </a-col>
          <a-col :md="8" class="product-info">
            <p class="text-black-28-600 text-upper">Nike</p>
            <p class="text-grey-18-500 text-upper">Dunk Low 'Black White'</p>
            <p class="text-black-18-600 text-upper">Размер</p>
            <div class="product-sizes">
              <ShopSizeBlock
                v-for="size in [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]"
                :key="size"
                >{{ size }}</ShopSizeBlock
              >
            </div>
            <p class="product-price text-black-18-600 text-upper">Цена: $314</p>
            <div>
              <a-row class="basket-button-block">
                <a-col :md="19">
                  <ButtonBlack>Добавить в корзину</ButtonBlack>
                </a-col>
                <a-col :md="1"></a-col>
                <a-col :md="4">
                  <ButtonFavorite
                    style="width: 100%; height: 100%"
                  ></ButtonFavorite>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
        <div class="about-product-block">
          <p class="text-black-24-600 text-upper">О товаре</p>
          <p>Dunk Low "White/Black" sneakers</p>
          <p>
            The Swoosh says it all. Crafted from black and white panels, these
            Dunk Low sneakers from Nike are all you need to make sure your
            outfit is complete. Easy and stylish.
          </p>
          <p>
            <ul>
                <li>black/white</li>
                <li>leather/rubber</li>
                <li>signature Swoosh logo detail</li>
                <li>contrasting panel detail</li>
                <li>round toe</li>
                <li>front lace-up fastening</li>
                <li>logo patch at the tongue</li>
            </ul>
          </p>
        </div>
        <div class="sale-block">
            <p class="text-black-24-600 text-upper">Sale</p>
            <div class="product-wrapper">
                <div
                    v-for="product in [1, 2, 3, 4, 5, 6]"
                    :key="product"
                    class="product-element"
                >
                <ShopProduct_card
                :product="product"
              />
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-info {
  padding-left: 20px;
}

.product-sizes {
  display: flex;
  flex-wrap: wrap;
}

.product-sizes .size-block {
  margin-right: 10px;
  margin-bottom: 10px;
}
.product-price {
  margin-top: 30px;
}

.basket-button-block {
  display: flex;
}

.about-product-block {
  margin-top: 40px;
}

.product-wrapper {
  padding: 40px 0px;
  border-radius: 30px;
  display: flex;
  overflow-x: scroll;
}

.product-element {
    margin-right: 20px;
} 
</style>
