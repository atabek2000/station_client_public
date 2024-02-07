<template>
  <div class="black-outlined-button"><slot></slot></div>
</template>

<style scoped>
.black-outlined-button {
  width: 100%;
  background-color: black;
  border-radius: 10px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;
  cursor: pointer;
  border: 2px solid white;
  text-align: center;
  font-family: "SF-Pro-Display", sans-serif !important;
}

.black-outlined-button:hover {
  background-color: white;
  color: black;
  border: 1px solid #f0f0f0;
}

.black-outlined-button:active {
  background-color: white;
  color: white;
  border-color: white;
}
</style>
