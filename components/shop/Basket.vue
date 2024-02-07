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
      if (localStorage.getItem("basket")) {
        products.value = JSON.parse(localStorage.getItem("basket"));
        total_sum.value = 0;
        products.value.forEach((prod) => {
          total_sum.value += Number(prod.price) * prod.count;
        });
      }
    };

    const deleteProduct = (product) => {
      if (localStorage.getItem("basket")) {
        let basket = JSON.parse(localStorage.getItem("basket"));
        basket = basket.filter(
          (prod) => !(prod.id == product.id && prod.size == product.size)
        );
        localStorage.setItem("basket", JSON.stringify(basket));
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

    // onMounted(() => {
    //   if (localStorage.getItem("basket")) {
    //     products.value = JSON.parse(localStorage.getItem("basket"));
    //     products.value.forEach((prod) => {
    //       total_sum.value += Number(prod.price);
    //     });
    //   }
    // });
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
      <!-- black -->
      {{ props.page }}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0048 18C16.8357 18 15.8899 18.9 15.8899 20C15.8899 21.1 16.8357 22 18.0048 22C19.1739 22 20.1304 21.1 20.1304 20C20.1304 18.9 19.1739 18 18.0048 18ZM7.37681 18C6.20773 18 5.26184 18.9 5.26184 20C5.26184 21.1 6.20773 22 7.37681 22C8.54589 22 9.50241 21.1 9.50241 20C9.50241 18.9 8.54589 18 7.37681 18ZM7.37681 15L8.54589 13H16.4638C17.2609 13 17.9623 12.59 18.3237 11.97L23 4H5.4744L4.47536 2H1V4H3.1256L6.95169 11.59L3.78454 17H20.1304V15H7.37681Z"
          fill="#1A120B"
        />
      </svg>
    </div>

    <div v-else class="basket-button-white" @click="showBasket">
      <!-- white -->
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0048 18C16.8357 18 15.8899 18.9 15.8899 20C15.8899 21.1 16.8357 22 18.0048 22C19.1739 22 20.1304 21.1 20.1304 20C20.1304 18.9 19.1739 18 18.0048 18ZM7.37681 18C6.20773 18 5.26184 18.9 5.26184 20C5.26184 21.1 6.20773 22 7.37681 22C8.54589 22 9.50241 21.1 9.50241 20C9.50241 18.9 8.54589 18 7.37681 18ZM7.37681 15L8.54589 13H16.4638C17.2609 13 17.9623 12.59 18.3237 11.97L23 4H5.4744L4.47536 2H1V4H3.1256L6.95169 11.59L3.78454 17H20.1304V15H7.37681Z"
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
          Корзина
        </p>
        <div class="basket-products" v-if="products.length > 0">
          <ShopBasketProduct
            v-for="product in products"
            :key="product"
            :product="product"
            @deleteProduct="deleteProduct"
          />
        </div>
        <div class="basket-footer" v-if="products.length > 0">
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
        </div>
        <div v-else><h2>Товаров нет в карзине!</h2></div>
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
  /* top: 80vh; */
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
