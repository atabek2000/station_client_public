<script>
export default {
  props: {
    page: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const basketButtonVisible = ref(false);

    const closeDrawer = () => {
      emit("closeDrawer");
    };

    const showBasket = () => {
      basketButtonVisible.value = true;
      if (localStorage.getItem("starred")) {
        products.value = JSON.parse(localStorage.getItem("starred"));
        total_sum.value = 0;
        products.value.forEach((prod) => {
          total_sum.value += Number(prod.price) * prod.count;
        });
      }
    };

    const deleteProduct = (product) => {
      if (localStorage.getItem("starred")) {
        let basket = JSON.parse(localStorage.getItem("starred"));
        basket = basket.filter(
          (prod) => !(prod.id == product.id && prod.size == product.size)
        );
        localStorage.setItem("starred", JSON.stringify(basket));
        products.value = basket;
        total_sum.value = 0;
        products.value.forEach((prod) => {
          total_sum.value += Number(prod.price) * prod.count;
        });
        const { basketCount } = useBasket();
        basketCount().value -= 1;
      }
    };

    const products = ref([]);
    const total_sum = ref(0);

    return {
      deleteProduct,
      showBasket,
      products,
      total_sum,
      basketButtonVisible,
      closeDrawer,
      props,
    };
  },
};
</script>

<template>
  <div class="basket-block">
    <div v-if="!props.page" class="basket-button" @click="showBasket">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 3.32495C14.76 3.32495 13.09 4.13495 12 5.41495C10.91 4.13495 9.24 3.32495 7.5 3.32495C4.42 3.32495 2 5.74495 2 8.82495C2 12.605 5.4 15.685 10.55 20.365L12 21.675L13.45 20.355C18.6 15.685 22 12.605 22 8.82495C22 5.74495 19.58 3.32495 16.5 3.32495ZM12.1 18.875L12 18.975L11.9 18.875C7.14 14.565 4 11.715 4 8.82495C4 6.82495 5.5 5.32495 7.5 5.32495C9.04 5.32495 10.54 6.31495 11.07 7.68495H12.94C13.46 6.31495 14.96 5.32495 16.5 5.32495C18.5 5.32495 20 6.82495 20 8.82495C20 11.715 16.86 14.565 12.1 18.875Z"
          fill="#1A120B"
        />
      </svg>
    </div>

    <div v-else class="basket-button-white" @click="showBasket">
      <!-- main page -->
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 3.32495C14.76 3.32495 13.09 4.13495 12 5.41495C10.91 4.13495 9.24 3.32495 7.5 3.32495C4.42 3.32495 2 5.74495 2 8.82495C2 12.605 5.4 15.685 10.55 20.365L12 21.675L13.45 20.355C18.6 15.685 22 12.605 22 8.82495C22 5.74495 19.58 3.32495 16.5 3.32495ZM12.1 18.875L12 18.975L11.9 18.875C7.14 14.565 4 11.715 4 8.82495C4 6.82495 5.5 5.32495 7.5 5.32495C9.04 5.32495 10.54 6.31495 11.07 7.68495H12.94C13.46 6.31495 14.96 5.32495 16.5 5.32495C18.5 5.32495 20 6.82495 20 8.82495C20 11.715 16.86 14.565 12.1 18.875Z"
          fill="white"
        />
      </svg>
    </div>
    <a-drawer
      v-model:visible="basketButtonVisible"
      class="basket-drawer"
      placement="right"
      @after-visible-change="afterVisibleChange"
    >
      <div class="basket-body">
        <p class="text-black-28-700 text-upper">
          <!-- <img src="~assets/button/basket.svg" alt="" /> -->
          Избранные
        </p>
        <div class="basket-products" v-if="products.length > 0">
          <ShopBasketProduct
            v-for="product in products"
            :key="product"
            :product="product"
            @deleteProduct="deleteProduct"
          />
        </div>
        <!-- <div class="basket-footer" v-if="products.length > 0">
          <div class="basket-footer-info">
            <p class="total-price">Итого:</p>
            <p class="text-black-24-700">{{ total_sum }} ₸</p>
          </div>
          <div class="basket-footer-button">
            <NuxtLink
              to="/address"
              @click="
                basketButtonVisible = false;
                closeDrawer();
              "
            >
              <ButtonBlack>Купить</ButtonBlack>
            </NuxtLink>
          </div>
        </div> -->
        <div v-else><h2>Избранные товары нет!</h2></div>
      </div>
    </a-drawer>
  </div>
</template>

<style scoped>
.basket-product {
  margin-bottom: 20px;
}

.basket-footer {
  padding-top: 30px;
  position: fixed;
  width: 515px;
  bottom: 20px;
  background-color: white;
  margin-bottom: -24px;
  padding-bottom: 24px;
}

.basket-footer-info {
  display: flex;
  justify-content: space-between;
}

.basket-footer-info .total-price {
  font-weight: 700;
  font-size: 24px;
  color: #636363;
}

.basket-products {
  /* height: 70%; */
  overflow-y: auto;
  padding-bottom: 150px;
}

.basket-body {
  height: 100%;
  position: relative;
  padding-bottom: 40px;
}

.basket-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 8px;
}

.basket-button-white {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid white
}

@media screen and (max-width: 768px) {
  .basket-button svg {
    width: 33px;
    height: 33px;
  }

  .basket-footer {
    width: calc(100% - 48px);
  }

  .black-button {
    font-size: 18px;
    text-transform: uppercase;

    line-height: 52px;
  }

  .total-price {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
  }

  .basket-footer-info .text-black-24-700 {
    font-weight: 600;
  }

  .basket-body > .text-black-28-700 {
    font-size: 24px;
    text-transform: none;
    font-weight: 600;
  }
}
</style>
