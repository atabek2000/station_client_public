<script setup>
const route = useRoute();
</script>

<template>
  <div>
    <NuxtLayout>
      <!-- <Page_header /> -->
      <PageHeaderMain v-if="route.name === 'index'" />
      <PageHeader v-else />
      <NuxtPage />
      <PageFooter />
    </NuxtLayout>
  </div>
</template>

<style>
.vjs-loading-spinner,
.vjs-big-play-button,
.vjs-control-bar,
.vjs-error-display,
.vjs-modal-dialog {
  display: none !important;
}

.video-js,
.vjs-tech {
  width: 100%;
  height: fit-content;
}

.container {
  width: 90%;
  margin: 0 auto;
}

.center-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.filter-collapse .ant-collapse-content {
  border: none !important;
  font-family: "SF-Pro-Display", sans-serif !important;
}
.filter-collapse .ant-collapse-header {
  border: none !important;
  border-radius: 5px;
  font-size: 16px;
}
.filter-collapse .ant-collapse-header:hover {
  background-color: #f9f9f9 !important;
}
.filter-collapse .ant-collapse-item {
  border: none !important;
  font-family: "SF-Pro-Display", sans-serif !important;
  font-size: 16px;
}

.text-button {
  cursor: pointer;
  user-select: none;
}

.mobile-burger-icon svg,
.mobile-burger-close-icon svg {
  width: 24px;
  height: 18px;
  color: black;
}

/* spacing */
.p-0 {
  padding: 0;
}

.m-0 {
  margin: 0;
}

.mb-4 {
  margin-bottom: 4px;
}

.mb-5 {
  margin-bottom: 5px;
}

.mb-8 {
  margin-bottom: 8px;
}

.mb-16 {
  margin-bottom: 16px;
}

.mt-4 {
  margin-top: 4px;
}

.mt-5 {
  margin-top: 5px;
}

.mt-8 {
  margin-top: 8px;
}

.mt-16 {
  margin-top: 16px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-32 {
  margin-top: 32px;
}

.mt-40 {
  margin-top: 40px;
}

.ml-5 {
  margin-left: 5px;
}
.ml-8 {
  margin-left: 8px;
}
.ml-16 {
  margin-left: 16px;
}

.m-auto {
  margin: 0 auto;
}
/* spacing */

.web-input-main input {
  background-color: rgba(0, 0, 0, 0) !important;
  color: white;
}

/* flex */
.d-flex {
  display: flex;
}

.flex-center {
  display: flex;
  justify-content: center;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
}
.flex-start {
  display: flex;
  justify-content: flex-start;
}
.flex-between {
  display: flex;
  justify-content: space-between;
}
/* flex */

/* ant-model */
.success-modal .ant-modal-content {
  border-radius: 20px;
}
/* ant-model */

/* fonts */

.text-black {
  color: black;
}
.text-black:hover {
  color: black;
}
.text-center {
  text-align: center;
}

.text-danger {
  color: red;
}

.text-warning {
  color: orange;
}

.text-upper {
  text-transform: uppercase;
}

.text-black-28-600 {
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
}

.text-black-28-700 {
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
}

.text-black-24-700 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
}

.text-black-24-600 {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
}

.text-grey-18-500 {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #636363;
}

.text-black-18-400 {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: black;
}

.text-grey-14-400 {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #636363;
}

.text-black-18-500 {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: black;
}

.text-black-18-600 {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}

.text-black-18-700 {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
}

.text-black-16-400 {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

.text-gray-14-600 {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #636363;
}

.text-black-14-600 {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: black;
}

.text-black-12-400 {
  font-weight: 400;
  font-size: 12px;
  color: black;
}

.font-sf-pro {
  font-family: "SF-Pro-Display", sans-serif !important;
}

/* fonts */

/* input-outlined */
.input-outlined {
  border-color: #636363;
  min-height: 36px;
  border-radius: 10px;
  color: black;
  line-height: 19px;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}
.input-outlined:focus {
  border-color: #636363;
  outline: none;
}
/* input-outlined */

/* antdv */

.basket-drawer .ant-drawer-header {
  padding-top: 24px;
}

.ant-drawer-header-title {
  justify-content: flex-end;
}

.ant-drawer-content-wrapper {
  width: 562px !important;
}

.basket-drawer .ant-drawer-body {
  padding-bottom: 0px;
}

/* custom filter checkbox */
.filter-checkbox .ant-checkbox .ant-checkbox-inner {
  background: #fff no-repeat center center;
  border: 1px solid black;
  border-radius: 50%;
}

.filter-checkbox .ant-checkbox-checked .ant-checkbox-inner {
  background: #fff no-repeat center center;
  background-image: url("/img/forms/check.svg");
  background-size: 60%;
  border: 1px solid black;
  border-radius: 50%;
}

.filter-checkbox .ant-checkbox-wrapper:hover {
  border-color: black;
}

.filter-checkbox .ant-checkbox-checked::after {
  border: none;
  animation: none;
  content: none;
}

.filter-checkbox .ant-checkbox-inner::after {
  content: none;
}

.filter-checkbox .ant-checkbox-checked .ant-checkbox-inner::after {
  opacity: 100;
  content: none;
}

.filter-checkbox .ant-checkbox + span {
  text-transform: uppercase;
}

.filter-checkbox .ant-checkbox-checked + span {
  text-transform: uppercase;
  font-weight: bold;
}

.filter-checkbox.ant-checkbox-group {
  display: flex;
  flex-direction: column;
}

.filter-radio .ant-radio-inner,
.filter-radio .ant-radio-checked .ant-radio-inner {
  border: 1px solid black;
  background: #fff no-repeat center center;
  background-size: 60%;
}
.filter-radio .ant-radio-input:focus + .ant-radio-inner {
  box-shadow: none;
}

.filter-radio .ant-radio-checked .ant-radio-inner::after,
.filter-radio .ant-radio-inner::after {
  transform: none;
  transition: none;
}

.filter-radio .ant-radio-checked:after,
.filter-radio .ant-radio-checked .ant-radio-input {
  animation: none;
  border: none;
}

.filter-radio .ant-radio-checked .ant-radio-inner {
  background-image: url("/img/forms/check.svg");
}

.filter-radio .ant-radio-checked .ant-radio-inner:after {
  background: none;
}

.filter-radio.ant-radio-group {
  display: flex;
  flex-direction: column;
}

.mobile-filter-drawer .ant-drawer-content {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.mobile-menu-block .ant-timeline-item {
  padding-bottom: 46px;
}

.mobile-menu-block .ant-timeline-item-content a {
  text-decoration: none;
  color: black;
}

.mobile-menu-block .ant-timeline-item-content a.active {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

/* custom white-select */
.white-select.ant-select {
  border: 1px solid black;
  border-radius: 10px;
  height: 40px;
}

.white-select .ant-select-selector {
  border-radius: 10px !important;
  height: 100% !important;
}

.white-select .ant-select-selection-search-input {
  height: 100% !important;
}

.white-select .ant-select-selection-placeholder,
.white-select .ant-select-selection-item {
  font-size: 18px;
  font-weight: 600;
  color: black;
  line-height: 40px !important;
}

.ant-select-item-option-content {
  font-size: 18px;
}

.white-select.ant-select:not(.ant-select-disabled):hover .ant-select-selector,
.white-select.ant-select-focused:not(.ant-select-disabled):hover
  .ant-select-selector,
.white-select.ant-select-focused:not(.ant-select-disabled)
  .ant-select-selector {
  border-color: black !important;
}
/* custom white-select */

.product-retrieve-block .ant-image:first-child {
  width: 100%;
  margin-bottom: 8px;
}

.colappse-button {
  background-color: white;
  color: black;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #636363;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 36px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.search-input .anticon-search svg {
  width: 24px;
  height: 24px;
}

.catalog-wrapper {
  margin-top: 45px;
}

.basket-drawer .anticon-close svg {
  display: none;
}

.basket-drawer .ant-drawer-close {
  margin: 0;
}

.basket-drawer .anticon-close::after {
  content: url(assets/button/basket_close_button.svg);
}

.product-filter .ant-collapse-item .ant-collapse-arrow svg {
  display: none;
}

.product-filter .ant-collapse-item .ant-collapse-arrow::after {
  content: url(assets/button/dropdown-arrov-top.svg);
}

.product-filter
  .ant-collapse-item.ant-collapse-item-active
  .ant-collapse-arrow::after {
  content: url(assets/button/dropdown-arrov-bottom.svg);
}

.logo-right-block .ant-badge-count {
  background: black;
  top: 25px;
  bottom: 0px;
  right: 5px;
  min-width: 13px;
  height: 13px;
  padding: 0;
}

.logo-right-block .ant-badge-count span {
  line-height: 5px !important;
}

.mobile-search-block .ant-badge-count {
  background: black;
  top: 22px;
  bottom: 0px;
  height: 30px;
}

.mobile-search-block .ant-badge-count span,
.mobile-search-block .ant-badge-count p {
  height: 25px;
  line-height: 30px;
}

.filter-checkbox .ant-checkbox-group-item + .ant-checkbox-group-item {
  margin-top: 10px;
}

.filter-radio .ant-radio-wrapper + .ant-radio-wrapper {
  margin-top: 10px;
}

.mobile-menu-drawer.ant-drawer-open .ant-drawer-content {
  height: auto;
}

.menu-timeline {
  margin-left: -5px;
}

.menu-timeline .ant-timeline-item-tail {
  border-left: 1px solid #636363 !important;
}

.menu-timeline .timeline-dot {
  background-color: #636363;
}

/* popover */
.ant-popover-placement-bottom,
.ant-popover-placement-bottomLeft,
.ant-popover-placement-bottomRight {
  padding-top: 32px;
  width: 100%;
  border-radius: 8px;
}

.ant-popover-inner {
  border-radius: 8px;
  padding: 40px;
}

.ant-popover-arrow {
  display: none;
}

.ant-timeline-item-head-blue {
  color: #636363;
  border-color: #636363;
  background-color: #636363;
}

.ant-timeline-item-content {
  margin-left: 10px;
}

.ant-timeline-item-tail {
  border-left: 2px solid #636363;
}
/* antdv */

@media screen and (max-width: 562px) {
  .ant-drawer-content-wrapper {
    width: 100% !important;
  }

  .catalog-wrapper {
    margin-top: 20px;
  }
}

@media screen and (max-width: 768px) {
  .text-black-18-700 {
    font-size: 14px;
  }
}
</style>
