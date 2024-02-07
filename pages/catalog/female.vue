<template>
  <div>
    <a-row class="catalog-wrapper">
      <a-col :xs="24" :md="6" :xl="4" class="filter-block">
        <ProductFilter
          @updateFilter="updateFilter"
          :brands="brands"
          :product_types="product_types"
          :product_sizes="product_sizes"
          :product_prices="product_prices"
          :page="'female'"
        />
      </a-col>
      <a-col :xs="24" :md="18" :xl="20" class="catalog-block">
        <a-row :gutter="[8, 8]" v-if="products && products.results.length > 0">
          <a-col
            :xs="12"
            :lg="12"
            :xl="8"
            v-for="product in products.results"
            :key="product"
            class="product-element"
          >
            <NuxtLink :to="'/product/' + product.slug">
              <ShopProduct_card :product="product" />
            </NuxtLink>
          </a-col>
        </a-row>
        <div v-else>
          <h2 class="text-center text-danger">Товары не найдены!</h2>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const { onScroll, setCurrentPage } = usePagination();

const request_params = ref({
  gender: "f,u",
  page_size: 10,
  page: 1,
});

// получить товары
const { data: products, refresh } = await useAsyncData("product_female", () =>
  $fetch(runtimeConfig.public.API_URL + "product/", {
    params: request_params.value,
  })
);

// получить фильтры
const { data: product_types } = await useAsyncData("product_types", () =>
  $fetch(runtimeConfig.public.API_URL + "product_type/")
);
const { data: brands } = await useAsyncData("brands", () =>
  $fetch(runtimeConfig.public.API_URL + "brand/")
);
const { data: product_sizes } = await useAsyncData("product_sizes", () =>
  $fetch(runtimeConfig.public.API_URL + "product_size/")
);
const { data: product_prices } = await useAsyncData("product_prices", () =>
  $fetch(runtimeConfig.public.API_URL + "product_prices/")
);

const updateFilter = (filter) => {
  request_params.value = { ...request_params.value, ...filter };
  if (filter.type_id) {
    request_params.value.type_id = filter.type_id.join(",");
  }
  if (filter.brand_id) {
    request_params.value.brand_id = filter.brand_id.join(",");
  }
  if (filter.size) {
    request_params.value.size = filter.size.replace(/\s/g, "").split(",");
  }
  setCurrentPage(1);
  refresh();
};

if (process.client) {
  window.onscroll = async () => {
    const pag_products = await onScroll(
      "product/",
      products.value.count,
      request_params.value
    );
    if (pag_products) products.value.results.push(...pag_products.results);
  };

  document.body.ontouchmove = async () => {
    const pag_products = await onScroll(
      "product/",
      products.value.count,
      request_params.value
    );
    if (pag_products) products.value.results.push(...pag_products.results);
  };

  // когда покидаем страницу почистим window.onscroll
  onBeforeRouteLeave(() => {
    window.onscroll = null;
    document.body.ontouchmove = null;
  });
}
</script>

<style scoped>
.catalog-wrapper {
  padding: 0 20px;
}

.product-element {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
