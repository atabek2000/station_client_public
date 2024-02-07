<template>
  <span class="size-block text-button">
    <slot></slot>
  </span>
</template>

<style scoped>
.size-block {
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px 25px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 36px;
  text-transform: uppercase;
}
</style>
