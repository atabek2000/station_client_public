<template>
  <div class="login-form">
    <h2 class="login-title">Войти / Зарегистрироваться</h2>
    <p class="login-warn">
      Чтобы войти или зарегистрироваться, вам нужно ввести свой номер телефона и
      получить код подтверждения по SMS.
    </p>
    <InputOutlined
      style="margin-top: 30px"
      :phone="true"
      placeholder="+7 (___) ___-__-__"
    />
    <ButtonBlack style="margin-top: 30px">Получить код</ButtonBlack>
  </div>
</template>

<style scoped>
.login-form {
  max-width: 562px;
}
.login-title {
  font-size: 28px;
  font-weight: bolder;
}
.login-warn {
  font-size: 16px;
}

@media screen and (max-width: 562px) {
  .login-form {
    width: 100%;
    padding: 0 10px;
  }
}
</style>
