<template>
  <div class="basket-product">
    <a-row :gutter="[8, 8]">
      <a-col :xs="8" class="basket-product-image">
        <img :src="runtimeConfig.public.API_HOST + product.img" alt="" />
      </a-col>
      <a-col :xs="1"></a-col>
      <a-col
        :xs="15"
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <div>
          <div class="flex-between">
            <p class="text-black-24-700 text-upper m-0">{{ product.brand }}</p>
            <img
              src="~assets/button/basket_delete_button.png"
              style="height: 14px; cursor: pointer"
              alt=""
              @click="deleteProduct(product)"
            />
          </div>
          <p class="text-black-18-500 m-0 mt-8">{{ product.name }}</p>
          <p class="text-black-18-500 m-0 mt-32">Кол-во: {{ product.count }}</p>
        </div>
        <div class="basket-product-price-block">
          <p class="text-black-24-700 text-upper m-0 mt-8">
            ₸{{ formatNumber(product.price) }}
          </p>
          <div class="basket-product-favorite-block"></div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import formatNumber from "~/utils/numberFormat";
export default {
  props: {
    product: {
      type: Object,
      default: {},
    },
  },
  setup(props, { emit }) {
    const runtimeConfig = useRuntimeConfig();
    const deleteProduct = (product) => {
      emit("deleteProduct", product);
    };
    return {
      product: props.product,
      runtimeConfig,
      deleteProduct,
      formatNumber,
    };
  },
};
</script>

<style scoped>
.basket-product {
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f9f9f9;
  padding: 16px;
}
.basket-product-image {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.basket-product-image img {
  width: 100%;
}

.basket-product-price-block {
  display: flex;
  justify-content: space-between;
}

.basket-product-favorite-block {
  display: flex;
}

.basket-product-favorite-block .favorite-icon {
  margin-right: 10px;
}
</style>
