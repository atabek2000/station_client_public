<template>
  <div class="black-outlined-button"><slot></slot></div>
</template>

<style scoped>
.black-outlined-button {
  width: 100%;
  border-radius: 10px;
  color: black;
  font-size: 24px;
  font-weight: bold;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;
  cursor: pointer;
  border: 2px solid black;
  text-align: center;
  font-family: "SF-Pro-Display", sans-serif !important;
}

/* .black-outlined-button:hover {
  opacity: 80%;
  box-shadow: 0 0 30px 2px gray;
} */

.black-outlined-button:active {
  box-shadow: none;
  opacity: 100%;
}
</style>
