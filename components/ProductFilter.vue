<template>
  <div>
    <div class="product-filter">
      <p class="filter-title">Фильтр</p>
      <a-collapse
        class="filter-collapse"
        v-model:activeKey="activeKey"
        :expand-icon-position="'right'"
        accordion
      >
        <a-collapse-panel key="1" header="ТИП">
          <a-checkbox-group
            v-model:value="filterModel.type_id"
            name="product-filter-type"
            :options="product_types"
            class="filter-checkbox"
            @change="updateFilter"
          />
        </a-collapse-panel>
        <a-collapse-panel key="2" header="БРЕНД">
          <a-checkbox-group
            v-model:value="filterModel.brand_id"
            name="product-filter-type"
            :options="brands"
            class="filter-checkbox"
            @change="updateFilter"
          />
        </a-collapse-panel>
        <a-collapse-panel key="3" header="ЦЕНА">
          <div class="filter-price-block">
            <a-row :gutter="[9, 9]" class="mb-5">
              <a-col :xs="24" :md="12">
                <a-input v-model:value="filterModel.min_price"></a-input>
              </a-col>
              <a-col :xs="24" :md="12">
                <a-input v-model:value="filterModel.max_price"></a-input>
              </a-col>
            </a-row>
            <a-slider
              range
              @change="onChahgePriceSlider"
              :max="priceSliderBorders[1]"
              :min="priceSliderBorders[0]"
            />
            <ButtonBlack
              @click="updateFilter"
              style="text-transform: uppercase; font-size: 18px"
              >Применить</ButtonBlack
            >
          </div>
        </a-collapse-panel>
        <a-collapse-panel key="4" header="РАЗМЕР">
          <div class="filter-size-block">
            <!-- <a-input class="mb-5" v-model:value="filterModel.size"></a-input> -->
            <a-select
              ref="select"
              v-model:value="filterModel.size"
              style="width: 100%"
              :options="product_sizes"
              @change="handleChange"
              class="white-select mb-5"
            ></a-select>
            <ButtonBlack
              @click="updateFilter"
              style="text-transform: uppercase; font-size: 18px"
              >Применить</ButtonBlack
            >
          </div>
        </a-collapse-panel>
        <a-collapse-panel
          key="5"
          header="ПОЛ"
          v-if="page !== 'male' && page !== 'female'"
        >
          <a-radio-group
            v-model:value="filterModel.gender"
            name="filter-radio"
            class="filter-radio"
            @change="updateFilter"
          >
            <a-radio value="m">Мужской</a-radio>
            <a-radio value="f">Женский</a-radio>
            <a-radio value="u">Унисекс</a-radio>
          </a-radio-group>
        </a-collapse-panel>
        <a-collapse-panel key="6" header="СОРТИРОВАТЬ">
          <a-radio-group
            v-model:value="filterModel.ordering"
            name="filter-radio"
            class="filter-radio"
            @change="updateFilter"
          >
            <a-radio value="views">По популярности</a-radio>
            <a-radio value="price">По возрастанию цены</a-radio>
            <a-radio value="-price">По убыванию цены</a-radio>
            <a-radio value="created_at">По новинкам</a-radio>
            <a-radio value="discount">По скидкам</a-radio>
          </a-radio-group>
        </a-collapse-panel>
      </a-collapse>
    </div>

    <div class="mobile-product-filter">
      <div class="mobile-filter-button">
        <img @click="showFilterDrawer" src="/img/button/filter.svg" alt="" />
      </div>

      <div class="mobile-filter-body">
        <a-drawer
          class="mobile-filter-drawer"
          placement="bottom"
          :closable="false"
          :visible="filterDrawer"
          @close="closefilterDrawer"
          height="50%"
        >
          <template #title>
            <hr
              class="mobile-filter-drawer-top-line"
              @click="filterDrawer = false"
            />
            <h2
              class="text-black-28-600 text-upper text-center m-0 mt-5"
              @click="filterDrawer = false"
            >
              Фильтр
            </h2>
          </template>

          <a-collapse
            class="filter-collapse"
            v-model:activeKey="activeKey"
            :expand-icon-position="'right'"
            accordion
          >
            <a-collapse-panel key="1" header="ТИП">
              <a-checkbox-group
                v-model:value="filterModel.type_id"
                name="product-filter-type"
                :options="product_types"
                class="filter-checkbox"
                @change="updateFilter"
              />
            </a-collapse-panel>
            <a-collapse-panel key="2" header="БРЕНД">
              <a-checkbox-group
                v-model:value="filterModel.brand_id"
                name="product-filter-type"
                :options="brands"
                class="filter-checkbox"
                @change="updateFilter"
              />
            </a-collapse-panel>
            <a-collapse-panel key="3" header="ЦЕНА">
              <div class="filter-price-block">
                <a-row :gutter="[9, 9]" class="mb-5">
                  <a-col :xs="24" :md="12">
                    <a-input
                      v-model:value="filterModel.min_price"
                      placeholder="с"
                      @pressEnter="updateFilter"
                    ></a-input>
                  </a-col>
                  <a-col :xs="24" :md="12">
                    <a-input
                      v-model:value="filterModel.max_price"
                      placeholder="до"
                      @pressEnter="updateFilter"
                    ></a-input>
                  </a-col>
                </a-row>
                <a-slider
                  range
                  @change="onChahgePriceSlider"
                  :max="priceSliderBorders[1]"
                  :min="priceSliderBorders[0]"
                />
                <ButtonBlack @click="updateFilter">Применить</ButtonBlack>
              </div>
            </a-collapse-panel>
            <a-collapse-panel key="4" header="РАЗМЕР">
              <div class="filter-size-block">
                <a-select
                  ref="select"
                  v-model:value="filterModel.size"
                  style="width: 100%"
                  :options="product_sizes"
                  @change="handleChange"
                  class="white-select mb-5"
                ></a-select>
                <ButtonBlack @click="updateFilter">Применить</ButtonBlack>
              </div>
            </a-collapse-panel>
            <a-collapse-panel
              key="5"
              header="ПОЛ"
              v-if="page !== 'male' && page !== 'female'"
            >
              <a-radio-group
                v-model:value="filterModel.gender"
                name="filter-radio"
                class="filter-radio"
                @change="updateFilter"
              >
                <a-radio value="m">Мужской</a-radio>
                <a-radio value="f">Женский</a-radio>
                <a-radio value="u">Унисекс</a-radio>
              </a-radio-group>
            </a-collapse-panel>
            <a-collapse-panel key="6" header="ПО ПОПУЛЯРНОСТИ">
              <a-radio-group
                v-model:value="filterModel.ordering"
                name="filter-radio"
                class="filter-radio"
                @change="updateFilter"
              >
                <a-radio value="views">По популярности</a-radio>
                <a-radio value="price">По возрастанию цены</a-radio>
                <a-radio value="-price">По убыванию цены</a-radio>
                <a-radio value="created_at">По новинкам</a-radio>
                <a-radio value="discount">По скидкам</a-radio>
              </a-radio-group>
            </a-collapse-panel>
          </a-collapse>
        </a-drawer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    brands: {
      type: Array,
    },
    product_types: {
      type: Array,
    },
    product_sizes: {
      type: Array,
    },
    product_prices: {
      type: Array,
    },
    page: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const runtimeConfig = useRuntimeConfig();
    const route = useRoute();

    const page = ref(props.page);

    const filterModel = reactive({
      type_id: undefined,
      brand_id: undefined,
      min_price: undefined,
      max_price: undefined,
      ordering: undefined,
      size: undefined,
      gender: undefined,
      page: 1
    });

    const priceSlider = ref([undefined, undefined]);
    const priceSliderBorders = ref([0, 1000000]);

    const onChahgePriceSlider = (val) => {
      filterModel.min_price = val[0];
      filterModel.max_price = val[1];
    };

    const radioStyle = reactive({
      display: "flex",
      height: "30px",
      lineHeight: "30px",
    });

    const filterDrawer = ref(false);

    const showFilterDrawer = () => {
      filterDrawer.value = true;
    };

    const closefilterDrawer = () => {
      filterDrawer.value = false;
    };

    const updateFilter = () => {
      if (!filterModel.size) filterModel.size = undefined;
      emit("updateFilter", filterModel);
    };

    const brands = ref([]);
    const product_types = ref([]);
    const product_sizes = ref([{label: "Нет", value: undefined}]);
    const product_genders = ref([
      {
        label: "Мужское",
        value: "m",
      },
      {
        label: "Женское",
        value: "f",
      },
      {
        label: "Унисекс",
        value: "u",
      },
    ]);

    props.product_types.forEach((brnd) => {
      product_types.value.push({ label: brnd.name, value: brnd.id });
    });
    props.product_sizes.forEach((brnd) => {
      product_sizes.value.push({ label: brnd.size, value: brnd.size });
    });
    priceSliderBorders.value[0] = props.product_prices[0].product_min_price;
    priceSliderBorders.value[1] = props.product_prices[0].product_max_price;
    props.brands.forEach((brnd) => {
      brands.value.push({ label: brnd.name, value: brnd.id });
      // if from main page brand
      if (route.query.brand && route.query.brand == brnd.id)
        filterModel.brand_id = [brnd.id];
    });

    return {
      radioStyle,
      product_types,
      brands,
      product_sizes,
      filterModel,
      filterDrawer,
      page,
      product_genders,
      priceSlider,
      priceSliderBorders,
      showFilterDrawer,
      closefilterDrawer,
      updateFilter,
      onChahgePriceSlider,
    };
  },
};
</script>
<style scoped>
.filter-title {
  font-weight: bolder;
  margin-bottom: 24px;
}
.product-filter {
  max-width: 300px;
}
.filter-collapse {
  background-color: white !important;
  border: none;
}
.filter-collapse > .ant-collapse-item > .ant-collapse-content {
  border: none !important;
  border-bottom: none !important;
  border-top: none !important;
}
.filter-collapse > .ant-collapse-item > .ant-collapse-content-active {
  border: none !important;
  border-bottom: none !important;
  border-top: none !important;
}
.filter-collapse .ant-collapse-content-box {
  border-top: none !important;
}
.filter-collapse .ant-collapse-header {
  background-color: white !important;
  border: none !important;
  border-bottom: none !important;
  border-top: none !important;
}

.filter-price-block input,
.filter-size-block input {
  border-radius: 5px;
  border: 1px solid black;
}

.mobile-product-filter {
  display: none;
}

.mobile-filter-button {
  display: flex;
  justify-content: flex-end;
  padding: 0px 0px 45px 0px;
}

.mobile-filter-drawer-top-line {
  position: sticky;
  height: 3px;
  background-color: black;
  width: 20%;
  color: black;
  margin: 0 auto;
  border-radius: 3px;
}

@media screen and (max-width: 768px) {
  .product-filter {
    display: none;
  }

  .mobile-product-filter {
    display: block;
  }
}
</style>
