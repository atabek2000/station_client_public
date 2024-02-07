<template>
  <div class="page-wrapper">
    <div class="top-line">
      <span style="height: 3px; background-color: black; width: 100%"></span>
      <div class="line-circle"><div></div></div>
      <span style="height: 3px; background-color: #cecece; width: 100%"></span>
    </div>
    <div v-if="products.length > 0">
      <p class="text-black-28-600 text-center address-title">Адрес доставки</p>
      <div class="container">
        <a-row class="address-form-block" :gutter="[24, 24]">
          <a-col :md="12">
            <p
              v-if="formData.delivery === 'inter_national'"
              class="text-black-18-700 mb-5"
            >
              Страна
            </p>
            <a-input
              v-if="formData.delivery === 'inter_national'"
              class="input-outlined"
              placeholder="Страна"
              v-model:value="formData.country"
            />
            <p class="text-black-18-700 mt-16 mb-5">Город</p>
            <a-input
              class="input-outlined font-sf-pro"
              placeholder="Город"
              v-model:value="formData.city"
            />
            <p class="text-black-18-700 mt-16 mb-4">Способ доставки</p>

            <a-row
              :gutter="[8, 8]"
              v-if="
                formData.city &&
                currentCityArray.includes(formData.city?.toLowerCase())
              "
            >
              <a-col :xs="24" :lg="12">
                <ButtonBlack
                  v-if="formData.delivery === 'self'"
                  class="delivery-button"
                >
                  Самовывоз
                </ButtonBlack>
                <ButtonWhiteOutlined
                  v-else
                  @click="formData.delivery = 'self'"
                  class="delivery-button"
                  >Самовывоз</ButtonWhiteOutlined
                >
              </a-col>
              <a-col :xs="24" :lg="12">
                <ButtonBlack
                  v-if="formData.delivery === 'yandex'"
                  class="delivery-button"
                  >Яндекс доставка</ButtonBlack
                >
                <ButtonWhiteOutlined
                  v-else
                  @click="formData.delivery = 'yandex'"
                  class="delivery-button"
                  >Яндекс доставка</ButtonWhiteOutlined
                >
              </a-col>
              <!-- <a-col :xs="24" :lg="5">
                <ButtonBlack
                  v-if="formData.delivery === 'ups'"
                  style="font-size: 18px; line-height: 40px"
                  ><span>UPS</span></ButtonBlack
                >
                <ButtonWhiteOutlined
                  v-else
                  @click="formData.delivery = 'ups'"
                  style="font-size: 18px; line-height: 40px"
                  >UPS</ButtonWhiteOutlined
                >
              </a-col> -->
            </a-row>

            <a-row v-else :gutter="[8, 8]">
              <a-col :xs="24" :lg="12">
                <ButtonBlack
                  v-if="formData.delivery === 'in_country'"
                  class="delivery-button"
                >
                  Доставка по стране
                </ButtonBlack>
                <ButtonWhiteOutlined
                  v-else
                  @click="formData.delivery = 'in_country'"
                  class="delivery-button"
                  >Доставка по стране</ButtonWhiteOutlined
                >
              </a-col>

              <a-col :xs="24" :lg="12">
                <ButtonBlack
                  v-if="formData.delivery === 'inter_national'"
                  class="delivery-button"
                >
                  Международная доставка
                </ButtonBlack>
                <ButtonWhiteOutlined
                  v-else
                  @click="formData.delivery = 'inter_national'"
                  class="delivery-button"
                  >Международная доставка</ButtonWhiteOutlined
                >
              </a-col>
            </a-row>

            <p class="text-black-18-700 mt-16 mb-5">Номер телефона</p>
            <a-input
              class="input-outlined font-sf-pro"
              placeholder="+7 (ХХХ)-ХХ-ХХХ-ХХ"
              v-model:value="formData.phone"
              @change="phoneChange"
            />

            <p class="text-black-18-700 mt-16 mb-5">Улица</p>
            <a-input
              class="input-outlined font-sf-pro"
              placeholder="Улица"
              v-model:value="formData.street"
            />

            <p class="text-black-18-700 mt-16 mb-5">Дом</p>
            <a-input
              class="input-outlined font-sf-pro"
              placeholder="Дом"
              v-model:value="formData.house"
            />

            <a-row class="" :gutter="8">
              <a-col :xs="24" :md="12">
                <p class="text-black-18-700 mt-16 mb-5">Кв / офис</p>
                <a-input
                  class="input-outlined font-sf-pro"
                  placeholder="Кв / офис"
                  v-model:value="formData.office"
                />
              </a-col>
              <a-col :xs="24" :md="12">
                <p class="text-black-18-700 mt-16 mb-5">Домофон</p>
                <a-input
                  class="input-outlined font-sf-pro"
                  placeholder="Домофон"
                  v-model:value="formData.intercom"
                />
              </a-col>
            </a-row>

            <a-row class="" :gutter="8">
              <a-col :xs="24" :md="12">
                <p class="text-black-18-700 mt-16 mb-5">Подъезд</p>
                <a-input
                  class="input-outlined font-sf-pro"
                  placeholder="Подъезд"
                  v-model:value="formData.entrance"
                />
              </a-col>
              <a-col :xs="24" :md="12">
                <p class="text-black-18-700 mt-16 mb-5">Этаж</p>
                <a-input
                  class="input-outlined font-sf-pro"
                  placeholder="Этаж"
                  v-model:value="formData.floor"
                />
              </a-col>
            </a-row>
          </a-col>
          <a-col :md="12">
            <div class="address-form-basket-block">
              <div class="address-form-basket-products">
                <p class="text-black-24-600 mb-16">
                  В корзине {{ products.length }} товара
                </p>
                <div class="basket-product-wrapper">
                  <ShopBasketProduct
                    v-for="product in products"
                    :key="product"
                    :product="product"
                    @deleteProduct="deleteProduct"
                  />
                </div>
              </div>
              <div class="address-form-total">
                <div class="address-form-total-price-block">
                  <p class="text-black-24-600 m-0">Итого</p>
                  <p class="text-black-24-600 m-0">
                    {{ formatNumber(total_sum) }} ₸
                  </p>
                </div>
                <p class="text-gray-14-600 price-remain">
                  Без учета возможной стоимости доставки
                </p>
              </div>
            </div>
            <a-row justify="end" class="continue-button">
              <a-col :xs="24" :md="24">
                <ButtonBlack
                  @click="goToNextStep"
                  style="font-size: 18px; line-height: 52px"
                  ><span>Оплатить</span></ButtonBlack
                >
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </div>
    <div v-else>
      <h2 class="text-center text-warning">В корзине нет товаров!</h2>
    </div>

    <a-modal
      v-model:visible="modalPayVisible"
      :closable="false"
      centered
      title=""
      cancelText=" "
      @ok="modalPayVisible = false"
    >
      <h3 style="color: green">{{ modalPayTitle }}</h3>
      <p>{{ modalPayText }}</p>
      <p v-if="modalFailuerCode">Код ошибки: {{ modalFailuerCode }}</p>

      <p v-if="modalFailuerText">Текст ошибки: {{ modalFailuerText }}</p>
    </a-modal>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import formatNumber from "~/utils/numberFormat";
export default {
  setup() {
    const route = useRoute();
    const products = ref([]);
    const total_sum = ref(0);
    const formData = reactive({
      city: undefined, // город
      country: undefined, // город
      delivery: undefined, // способ доставки
      phone: undefined, // phone
      street: undefined, // улица
      house: undefined, // дом
      office: undefined, // оффис
      intercom: undefined, // домофон
      entrance: undefined, // подъезд
      floor: undefined, // этаж
    });

    const modalPayVisible = ref(false);
    const modalFailuerText = ref("");
    const modalFailuerCode = ref("");
    const modalPayTitle = ref("");
    const modalPayText = ref("");
    const currentCityArray = ["astana", "астана"];

    if (process.client) {
      if (route.query.pay && route.query.pay == "success") {
        modalPayVisible.value = true;
        modalPayTitle.value = "Оплата успешно прошло!";
        modalPayText.value =
          "Оплата прошла успешно. Спасибо за покупку. Наши менеджеры свяжутся с вами в ближайщее время.";
      } else if (route.query.pay && route.query.pay == "failure") {
        modalPayVisible.value = true;
        modalPayTitle.value = "Ошибка при оплате!";
        modalPayText.value =
          "Оплата не прошла!" +
          (route.query.pg_error_description ? "" : " Повторите попытку позже!");
        modalFailuerText.value = route.query.pg_error_description;
        modalFailuerCode.value = route.query.pg_error_code;
      }
    }

    const goToNextStep = async () => {
      const product_arr = products.value.map((prod) => {
        return { product: { id: prod.id }, quantity: prod.count };
      });

      if (formData.delivery === "inter_national" && !formData.country) {
        message.error("Укажите страну!");
      } else if (!formData.city && formData.city !== 0) {
        message.error("Укажите город!");
      } else if (
        !formData.delivery ||
        ((formData.delivery === "in_country" ||
          formData.delivery === "inter_national") &&
          currentCityArray.includes(formData.city?.toLowerCase()))
      ) {
        message.error("Укажите способ доставки!");
      } else if (!formData.phone) {
        message.error("Укажите номер телефона!");
      } else if (!formData.street) {
        message.error("Укажите улицу!");
      } else if (!formData.house) {
        message.error("Укажите дом!");
      } else {
        localStorage.setItem("payment_datas", JSON.stringify(formData));
        await $fetch(useRuntimeConfig().public.API_URL + "order/create/", {
          method: "POST",
          body: {
            ...formData,
            amount: total_sum.value,
            comment: "Some",
            order_items: product_arr,
          },
        }).then((res) => {
          window.location.href = res.url;
        });
        // useRouter().push("/payment");
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

    const phoneChange = (e) => {
      formData.phone = maskForPhone(e.target.value);
    };

    onBeforeMount(async () => {
      if (localStorage.getItem("basket")) {
        products.value = JSON.parse(localStorage.getItem("basket"));
        total_sum.value = 0;
        products.value.forEach(async (prod) => {
          total_sum.value += Number(prod.price) * prod.count;
        });
      }
    });

    onMounted(() => {
      if (localStorage.getItem("payment_datas")) {
        try {
          const payment_datas = JSON.parse(
            localStorage.getItem("payment_datas")
          );
          formData.city = payment_datas.city;
          formData.delivery = payment_datas.delivery;
          formData.phone = payment_datas.phone;
          formData.street = payment_datas.street;
          formData.house = payment_datas.house;
          formData.office = payment_datas.office;
          formData.intercom = payment_datas.intercom;
          formData.entrance = payment_datas.entrance;
          formData.floor = payment_datas.floor;
        } catch (e) {}
      }

      if (route.query.pay && route.query.pay == "success") {
        localStorage.clear("payment_datas");
      }
    });

    return {
      products,
      total_sum,
      formData,
      goToNextStep,
      modalPayVisible,
      modalPayTitle,
      modalPayText,
      modalFailuerCode,
      modalFailuerText,
      deleteProduct,
      phoneChange,
      currentCityArray,
      formatNumber,
    };
  },
};

// onMounted(() => {
//   if (localStorage.getItem("basket")) {
//     products.value = JSON.parse(localStorage.getItem("basket"));
//     total_sum.value = 0;
//     products.value.forEach((prod) => {
//       total_sum.value += Number(prod.price);
//     });
//   }
// });
</script>

<style scoped>
.page-wrapper {
  margin-top: 157px;
}

.top-line {
  display: flex;
  align-items: center;
}

.top-line .line-circle {
  border: 3px solid black;
  border-radius: 50%;
  padding: 3px;
}

.top-line .line-circle div {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
}

.address-form-basket-block {
  border: 2px solid black;
  border-radius: 10px;
}

.address-form-basket-products {
  padding: 40px;
  padding-bottom: 0px;
  overflow-y: scroll;
  max-height: 400px;
}

.address-form-basket-products .basket-product {
  margin-bottom: 16px;
}

.address-form-total {
  padding: 20px;
}

.address-form-total-price-block {
  display: flex;
  justify-content: space-between;
}

.continue-button {
  margin-top: 24px;
}

.basket-product-wrapper {
  display: block;
}

.continue-button span {
  text-transform: uppercase;
}

.delivery-button {
  font-size: 18px;
  line-height: 40px;
}

@media screen and (max-width: 768px) {
  .page-wrapper {
    margin-top: 90px;
  }

  .top-line,
  .address-title {
    display: none;
  }

  .delivery-button {
    font-size: 14px;
    line-height: 40px;
  }

  .text-black-18-700 {
    font-size: 14px;
  }

  .container {
    margin-top: 53px;
  }

  .address-form-basket-block {
    border: none;
  }

  .address-form-basket-products {
    padding: 0;
    width: 100%;
    display: flex;
    overflow-x: scroll;
  }

  .address-form-basket-products > p {
    display: none;
  }

  .address-form-basket-products .basket-product {
    width: 353px;
    margin-right: 8px;
  }

  .basket-product-wrapper {
    display: flex;
  }

  .price-remain {
    display: none;
  }

  .address-form-total-price-block p:first-child {
    font-size: 18px;
    color: #636363;
    text-transform: uppercase;
  }
}
</style>
