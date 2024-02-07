<template>
  <div class="black-button"><slot></slot></div>
</template>

<style scoped>
.black-button {
  background-color: black;
  border-radius: 10px;
  color: white;
  /* padding: 10px 0px;   */
  font-size: 24px;
  font-weight: 600;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;
  cursor: pointer;
  text-align: center;
  width: 100%;
  font-family: "SF-Pro-Display", sans-serif !important;
  /* min-width: 400px; */
  border: 1px solid black;
}

.black-button:hover {
  background-color: white;
  color: black;
  border: 1px solid #f0f0f0;
}

.black-button:active {
  background-color: white;
  color: white;
  border: none;
}

@media screen and (max-width: 768px) {
  .black-button {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
