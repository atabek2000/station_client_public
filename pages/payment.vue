<script>
import { message } from "ant-design-vue";
export default {
  data() {
    const paymentModal = ref(false);

    const showModal = () => {
      console.log(formData.card.length);
      if (!formData.card || formData.card.length < 20) {
        message.error("Укажите номер карты!");
        return;
      }

      if (!formData.name) {
        message.error("Укажите имя!");
        return;
      }

      if (!formData.date || formData.date.length < 7) {
        message.error("Укажите номер дата карты!");
        return;
      }

      if (!formData.cvv || formData.cvv.length < 3) {
        message.error("Укажите номер CVV!");
        return;
      }
      paymentModal.value = true;
    };

    const products = ref([]);
    const total_sum = ref(0);

    const formData = reactive({
      card: undefined,
      name: undefined,
      date: undefined,
      cvv: undefined,
    });

    const cardChange = (e) => {
      formData.card = maskForCard(e.target.value);
    };

    const cardDateChange = (e) => {
      formData.date = maskForCardDate(e.target.value);
    };

    const cardCVVChange = (e) => {
      formData.cvv = maskForCardCVV(e.target.value);
    };

    onBeforeMount(() => {
      if (localStorage.getItem("basket")) {
        products.value = JSON.parse(localStorage.getItem("basket"));
        total_sum.value = 0;
        products.value.forEach((prod) => {
          total_sum.value += Number(prod.price) * prod.count;
        });
      }
    });
    return {
      paymentModal,
      showModal,
      products,
      total_sum,
      formData,
      cardChange,
      cardDateChange,
      cardCVVChange,
    };
  },
};
</script>

<template>
  <div>
    <div class="top-line">
      <span style="height: 3px; background-color: black; width: 100%"></span>
      <div class="line-circle"><div></div></div>
      <span style="height: 3px; background-color: #cecece; width: 100%"></span>
    </div>
    <p class="text-black-28-600 text-center">Оплата</p>
    <div class="container">
      <a-row class="address-form-block" :gutter="[8, 24]">
        <a-col :md="12">
          <p class="text-black-18-600 mb-5">Номер карты</p>
          <a-input
            class="input-outlined"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            v-model:value="formData.card"
            @change="cardChange"
          />
          <p class="text-black-18-600 mt-20 mb-5">Имя</p>
          <a-input
            class="input-outlined"
            placeholder="Имя"
            v-model:value="formData.name"
          />
          <a-row :gutter="[8, 8]">
            <a-col :xs="24" :lg="12">
              <p class="text-black-18-600 mt-20 mb-5">Дата</p>
              <a-input
                class="input-outlined"
                placeholder="00 / 00"
                v-model:value="formData.date"
                @change="cardDateChange"
              />
            </a-col>
            <a-col :xs="24" :lg="12">
              <p class="text-black-18-600 mt-20 mb-5">CVV</p>
              <a-input
                class="input-outlined"
                placeholder="000"
                v-model:value="formData.cvv"
                @change="cardCVVChange"
              />
            </a-col>
          </a-row>
          <div class="card-types">
            <img src="/img/card_types/master.png" alt="card" />
            <img src="/img/card_types/visa.png" alt="card" />
          </div>
        </a-col>
        <a-col :md="12">
          <div class="address-form-basket-block">
            <div class="address-form-basket-products">
              <p class="text-black-24-600">В корзине 2 товара</p>
              <ShopBasketProduct
                v-for="product in products"
                :key="product"
                :product="product"
              />
            </div>
            <div class="address-form-total">
              <div class="address-form-total-price-block">
                <p class="text-black-24-600 m-0">Итого</p>
                <p class="text-black-24-600 m-0">{{ total_sum }}</p>
              </div>
              <p class="text-black-14-600">
                Без учета возможной стоимости доставки
              </p>
            </div>
          </div>
          <a-row justify="end" class="continue-button" :gutter="[8, 8]">
            <a-col :xs="24" :md="12">
              <NuxtLink to="/address">
                <ButtonWhiteOutlined><span>Назад</span></ButtonWhiteOutlined>
              </NuxtLink>
            </a-col>
            <a-col :xs="24" :md="12"
              ><ButtonBlack @click="showModal"
                ><span>Дальше</span></ButtonBlack
              ></a-col
            >
          </a-row>
        </a-col>
      </a-row>
    </div>
    <a-modal
      v-model:visible="paymentModal"
      :footer="null"
      class="success-modal"
    >
      <div class="flex-center">
        <img src="/img/modal/circle-check.png" class="m-auto" alt="" />
      </div>
      <h3 class="text-black-18-600 text-center mt-20">Заказ принят</h3>
      <p class="text-grey-14-400 text-center m-0">
        Ваш заказ был успешно принят.
      </p>
      <p class="text-grey-14-400 text-center m-0">
        Мы оценим его и свяжемся с вами для уточнения деталей или подтверждения.
      </p>
      <p class="text-grey-14-400 text-center m-0">Оставайтесь на связи!</p>
    </a-modal>
  </div>
</template>

<style scoped>
.card-types {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.card-types img {
  margin-left: 10px;
}

.address-form-basket-block {
  border: 2px solid black;
  border-radius: 10px;
}

.address-form-basket-products {
  padding: 20px;
  padding-bottom: 0px;
  overflow-y: scroll;
  max-height: 400px;
}

.address-form-basket-products .basket-product {
  margin-bottom: 20px;
}

.address-form-total {
  padding: 20px;
}

.address-form-total-price-block {
  display: flex;
  justify-content: space-between;
}

.continue-button {
  margin-top: 15px;
}
</style>
