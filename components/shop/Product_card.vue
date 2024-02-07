<script>
import formatNumber from "~/utils/numberFormat";

// const runtimeConfig = useRuntimeConfig();
export default {
  props: {
    product: {
      type: Object,
    },
    price: {
      type: Number,
    },
    sale_price: {
      type: Number,
    },
    product_name: {
      type: String,
    },
    img: {
      type: String,
    },
    page: {
      type: String,
    },
  },
  setup() {
    const runtimeConfig = useRuntimeConfig();
    return { runtimeConfig, formatNumber };
  },
};
</script>
<template>
  <!-- <a-card hoverable class="product-card"> </a-card> -->
  <div class="product-card">
    <div class="card-image">
      <img :src="runtimeConfig.public.API_HOST + product.image_path" alt="" />
    </div>
    <div class="">
      <div v-if="!page" class="brand-name">{{ product.brand?.name }}</div>
      <div class="card-info">{{ product?.name }}</div>
      <div class="price" v-if="Number(product.discount) == 0">
        ₸{{ formatNumber(product.price) }}
      </div>
      <div class="price-discount" v-else>
        <p class="old-price">₸{{ formatNumber(product.price) }}</p>
        <p class="new-price">
          ₸{{ formatNumber(product.price - product.discount) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 330px;
  border-radius: 20px;
  height: 462px;
  background-color: #f9f9f9;
  border: 1px solid black;
  padding: 20px;
  color: black;
  text-overflow: ellipsis ellipsis;
}

.product-card .brand-name {
  margin-top: 24px;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
}

.product-card img {
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
}

.price {
  border-radius: 15px;
  font-weight: 700;
  font-size: 24px;
  margin-top: 9px;
  text-overflow: ellipsis;
}

.card-info {
  font-weight: 500;
  font-size: 18px;
  margin-top: 8px;
}

.price-discount {
  display: flex;
  position: relative;
  margin-top: 26px;
  text-overflow: ellipsis ellipsis;
}

.price-discount .old-price {
  font-size: 12px;
  font-weight: 400;
  vertical-align: bottom;
  display: flex;
  align-items: flex-end;
  color: #636363;
  text-decoration: line-through;
  margin-bottom: 0;
  line-height: 25px;
}

.price-discount .new-price {
  color: rgba(210, 0, 0, 1);
  font-weight: bold;
  margin-left: қpx;
  font-size: 24px;
  margin-bottom: 0;
  position: absolute;
  left: 10px;
  top: -17px;
  white-space: nowrap;
  text-overflow: ellipsis ellipsis;
}

.card-image img {
  height: 200px;
  object-fit: contain;
}

@media screen and (max-width: 768px) {
  .product-card {
    /* width: 100%; */
    width: 172px;
    height: 248px;
    /* height: 100%; */
  }

  .card-image img {
    height: 100px;
  }

  .card-info {
    font-size: 12px;
  }

  .price,
  .price-discount .new-price {
    font-size: 18px;
  }

  .price {
    margin-top: 9px;
    margin-bottom: 9px;
  }

  .price-discount .old-price {
    line-height: 18px;
  }
}

@media screen and (max-width: 385px) {
  .product-card,
  .product-card img {
    width: 90%;
  }
}
</style>
