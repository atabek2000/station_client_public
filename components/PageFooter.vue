<template>
  <div>
    <div class="footer" id="page-footer">
      <div class="container">
        <div class="footer-title"><a href="/">Station</a></div>
        <a-row type="flex" justify="space-between" class="footer-block">
          <a-col :xs="24" :md="12">
            <span class="footer-subtitle main"> контакты </span>
            <span class="footer-subtitle"> Мобильный телефон: </span>
            <span class="footer-text"> +7 (770) 599 100 99 </span>
            <br />
            <span class="footer-subtitle"> e-mail: </span>
            <span class="footer-text"> info@stationalmaty.com </span>
          </a-col>
          <a-col :xs="24" :md="12">
            <div class="social-block">
              <span class="footer-subtitle main"> Социальные сети </span>
              <img src="~assets/social/facebook.svg" alt="" width="24" />
              <img src="~assets/social/whatsapp.svg" alt="" width="24" />
              <img src="~assets/social/telegram.svg" alt="" width="24" />
              <img src="~assets/social/instagram.svg" alt="" width="24" />
            </div>
          </a-col>
        </a-row>
        <hr />

        <a-row
          type="flex"
          justify="center"
          :gutter="[16, 32]"
          class="footer-button-block"
        >
          <a-col>
            <span class="footer-button">Пользовательское соглашение</span>
          </a-col>
          <a-col>
            <span class="footer-button">Вакансии</span>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="page-loading" v-if="loading().value">
      <!-- <img src="/img/common/loader.png" alt="" /> -->
    </div>
  </div>
</template>

<script setup>
import { message } from "ant-design-vue";

const { loading } = useLoader();
const runtimeConfig = useRuntimeConfig();
const menuVisible = ref(false);
const contactVisible = ref(false);
const newVisible = ref(false);

const subscribeEmail = ref("");
const sendEmail = () => {
  $fetch(runtimeConfig.public.API_URL + "subscribes/create/", {
    body: {
      email: subscribeEmail.value,
    },
    method: "post",
    onResponseError({ response }) {
      showFetchError(response);
    },
    onResponse({ response }) {
      if (response.ok) {
        message.success(
          "Спасибо за заявку. Мы свяжемся с вами ближайщее время!"
        );
        subscribeEmail.value = "";
      }
    },
  });
};
</script>

<style scoped>
.footer {
  margin-top: 120px;
  background-color: black;
  color: white;
  padding: 20px;
}

.footer-title {
  font-size: 40px;
  text-align: center;
  text-decoration: none;
}
.footer-title a{
  color: white;
}

.footer-block {
  margin-top: 32px;
}

.footer-text {
  font-size: 16px;
  font-family: "SF-Pro-Display", sans-serif !important;
}

.social-block {
  position: absolute;
  right: 0;
}

.footer-subtitle {
  display: inline-block;
  font-size: 18px;
  margin-bottom: 8px;
}

.footer-subtitle.main {
  display: block;
  margin-bottom: 16px;
}

hr {
  margin-top: 24px;
}

.footer-button-block {
  margin-top: 32px;
}

.footer-button {
  border: 2px solid white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
}

.social-block img {
  margin-right: 24px;
}

@media screen and (max-width: 768px) {
  .social-block {
    position: inherit;
    margin-top: 40px;
  }
}
</style>
