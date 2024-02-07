<template>
  <div class="login-form">
    <h2 class="login-title">Подтверждение номера</h2>
    <p class="login-warn">+ 7 (747) 951 04 55</p>
    <InputOutlined style="margin-top: 30px" placeholder="SMS код" />
    <ButtonBlack style="margin-top: 30px">Подтвердить телефон</ButtonBlack>
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
