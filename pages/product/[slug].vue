<template>
  <div>
    <div class="container product-retrieve-wrapper">
      <div class="bread-crumb-block"></div>
      <div class="product-retrieve-block">
        <a-row>
          <a-col :xs="24" :md="16" class="product-images">
            <a-image-preview-group class="image-full">
              <a-image
                class="main-image"
                :src="runtimeConfig.public.API_HOST + product.image_path"
                style="width: 100%"
              />
              <a-row :gutter="[8, 8]">
                <a-col
                  :xs="8"
                  :md="8"
                  v-for="image in product.images"
                  :key="image"
                >
                  <a-image
                    style="width: 100%"
                    :src="runtimeConfig.public.API_HOST + image.image"
                  />
                </a-col>
              </a-row>
            </a-image-preview-group>
          </a-col>
          <a-col :xs="24" :md="8" class="product-info">
            <p class="text-black-28-600 text-upper m-0">
              {{ product.brand?.name }}
            </p>
            <p class="text-grey-18-500 text-upper m-0 mt-8">
              {{ product.name }}
            </p>
            <p class="text-black-18-600 text-upper m-0 mt-40">Размер</p>
            <a-select
              class="white-select m-0 mt-16"
              v-model:value="formData.size"
              style="width: 100%"
              placeholder="Выберите размер"
            >
              <a-select-option
                v-for="size in product.size"
                :key="size.id"
                :value="size.size"
                >{{ size.size }}</a-select-option
              >
            </a-select>
            <!-- <div class="product-sizes">
                <ShopSizeBlock
                  v-for="size in product.size"
                  :key="size.id"
                  >{{ size.size }}</ShopSizeBlock
                >
              </div> -->
            <p class="m-0 product-price text-black-18-600 text-upper">
              Цена: ₸{{
                Number(product.discount) == 0
                  ? product.price
                  : product.price - product.discount
              }}
            </p>
            <div class="product-count-block">
              <a-row :gutter="[12, 12]" style="width: 200px">
                <a-col :xs="8">
                  <img
                    @click="countDecrement"
                    src="/img/button/price-minus.svg"
                    alt=""
                  />
                </a-col>
                <a-col :xs="8"
                  ><p
                    style="
                      font-size: 28px;
                      text-align: center;
                      font-weight: 600;
                    "
                    class="m-0"
                  >
                    {{ formData.count }}
                  </p></a-col
                >
                <a-col :xs="8">
                  <img
                    @click="countIncrement"
                    src="/img/button/price-plus.svg"
                    alt=""
                  />
                </a-col>
              </a-row>
            </div>
            <div>
              <a-row class="basket-button-block mt-40">
                <a-col :xs="24">
                  <ButtonBlack
                    @click="addToBasket(product)"
                    style="
                      padding-top: 15px;
                      padding-bottom: 15px;
                      font-size: 18px;
                      text-transform: uppercase;
                    "
                    >Добавить в корзину</ButtonBlack
                  >
                </a-col>
                <!-- <a-col :md="1"></a-col>
                  <a-col :md="4">
                    <ButtonFavorite
                      style="width: 100%; height: 100%"
                    ></ButtonFavorite>
                  </a-col> -->
              </a-row>
            </div>
          </a-col>
        </a-row>
        <div class="about-product-block">
          <p class="text-black-24-700 text-upper">О товаре</p>
          <p class="text-black-18-400">{{ product.name }}</p>
          <div
            class="text-black-18-400"
            v-html="product.description ? product.description : ''"
          ></div>
        </div>
        <div class="about-product-block-mobile">
          <div
            class="colappse-button"
            @click="aboutProductVisible = !aboutProductVisible"
          >
            О товаре
            <img
              width="30"
              height="30"
              v-if="!aboutProductVisible"
              src="/img/button/chevron-up.png"
              alt=""
            />
            <img
              width="30"
              height="30"
              v-if="aboutProductVisible"
              src="/img/button/chevron-down.png"
              alt=""
            />
          </div>
          <div
            v-if="aboutProductVisible"
            v-html="product.description ? product.description : ''"
          ></div>
        </div>
        <div class="sale-block">
          <p class="text-black-24-700 text-upper mb-16">Sale</p>
          <div class="product-wrapper">
            <div
              v-for="prod in products"
              :key="prod.id"
              class="product-element"
            >
              <NuxtLink
                :to="'/product/' + prod.slug"
                v-if="prod.id !== product.id"
              >
                <ShopProduct_card :product="prod" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { message } from "ant-design-vue";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();

const aboutProductVisible = ref(false);

const { basketCount } = useBasket();

// получить товары
const {
  data: product,
  refresh,
  pending,
} = await useAsyncData("products", () =>
  $fetch(runtimeConfig.public.API_URL + "product/" + route.params.slug)
);

const { data: products } = await useAsyncData(() =>
  $fetch(runtimeConfig.public.API_URL + "product/", {
    params: {
      discount: "1",
    },
  })
);

const formData = reactive({
  size: undefined,
  count: 1,
});

const countIncrement = () => {
  formData.count += 1;
};

const countDecrement = () => {
  if (formData.count > 1) {
    formData.count -= 1;
  }
};

const addToBasket = async (prod) => {
  // если раньше добавлено товары
  if (
    localStorage.getItem("basket") &&
    Array.isArray(JSON.parse(localStorage.getItem("basket"))) &&
    formData.size
  ) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    // добавлен текущий товар но другого размера
    if (
      basket.filter((pr) => prod.id == pr.id && formData.size == pr.size)
        .length === 0
    ) {
      basket.push({
        name: prod.name,
        id: prod.id,
        brand: prod.brand.name,
        price: prod.discount ? prod.price - prod.discount : prod.price,
        img: prod.image_path,
        size: formData.size,
        count: formData.count,
      });
      localStorage.setItem("basket", JSON.stringify(basket));
      basketCount().value = basketCount().value + 1;
    }
    // добавлен текущий товар того же размера
    else {
      basket = basket.map((s_prod) => {
        if (prod.id == s_prod.id && formData.size == s_prod.size) {
          s_prod.count += formData.count;
        }
        return s_prod;
      });
      localStorage.setItem("basket", JSON.stringify(basket));
    }
    message.success("Добавлено!");
  }
  // если раньше не добавлены товары
  else if (formData.size) {
    const basket = [
      {
        name: prod.name,
        id: prod.id,
        brand: prod.brand.name,
        price: prod.price,
        img: prod.image_path,
        size: formData.size,
        count: formData.count,
      },
    ];
    localStorage.setItem("basket", JSON.stringify(basket));
    message.success("Добавлено!");
    basketCount().value = basketCount().value + 1;
  } else {
    message.error("Выберите размер!");
  }
};

onMounted(() => {
  const { breadCrumb } = useBreadCrumb();
  const crumb = breadCrumb();
  crumb.value.push({
    name: product.value.brand?.name,
    link: "/catalog?brand=" + product.value.brand?.id,
  });
  crumb.value.push({ name: product.value.name, link: "#" });
});
</script>

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
  margin-top: 40px;
}

.basket-button-block {
  display: flex;
}

.about-product-block {
  margin-top: 100px;
}

.about-product-block h2 {
  margin-top: 24px;
}

.sale-block {
  margin-top: 120px;
}

.product-wrapper {
  padding-top: 0;
  /* border-radius: 30px; */
  display: flex;
  overflow-x: auto;
}

.product-element {
  margin-right: 20px;
}

.product-count-block {
  margin-top: 40px;
}

.product-images .main-image {
  margin-bottom: 8px;
}

.about-product-block-mobile {
  margin-top: 80px;
  display: none;
}

.product-retrieve-wrapper {
  margin-top: 38px;
}

@media screen and (max-width: 768px) {
  .product-info {
    margin-top: 24px;
    padding-left: 0;
  }

  .about-product-block {
    display: none;
  }
  .about-product-block-mobile {
    display: block;
  }

  .product-retrieve-wrapper {
    margin-top: 40px;
  }
}
</style>
