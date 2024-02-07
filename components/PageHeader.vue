<template>
  <div class="header-wrapper">
    <a-row type="flex" justify="space-between">
      <a-col :xs="{ order: 1, flex: 12 }" :md="{ order: 1, flex: 'auto' }">
        <div class="logo-block">
          <NuxtLink to="/">
            <img src="/img/main/mobile-logo.png" alt="" height="40" />
          </NuxtLink>
        </div>
      </a-col>
      <a-col :xs="{ order: 3, flex: 24 }" :md="{ order: 2, flex: 'auto' }">
        <div class="header-menu">
          <NuxtLink to="/catalog/sales">
            <div class="header-menu-item red">Акции</div>
          </NuxtLink>

          <NuxtLink to="/catalog" class="text-black">
            <div class="header-menu-item">Бренды</div>
          </NuxtLink>

          <NuxtLink to="/catalog?gender=m" class="text-black">
            <div class="header-menu-item">Мужское</div>
          </NuxtLink>

          <NuxtLink to="/catalog?gender=f" class="text-black">
            <div class="header-menu-item">Женское</div>
          </NuxtLink>

          <NuxtLink to="/catalog/new" class="text-black">
            <div class="header-menu-item">Новинки</div>
          </NuxtLink>
          <NuxtLink to="/catalog" class="text-black">
            <div class="header-menu-item">Каталог</div>
          </NuxtLink>
        </div>
      </a-col>
      <a-col :xs="{ order: 2, flex: 12 }" :md="{ order: 3, flex: 'auto' }">
        <div class="logo-right-block">
          <a-input
            class="web-input"
            placeholder="ПОИСК"
            @change="searchProduct"
            @pressEnter="searchProduct"
          >
            <template #prefix>
              <SearchOutlined
                style="color: #636363; border-radius: 8px"
                class="search-input"
              />
            </template>
          </a-input>
          <div class="mobile-input-block">
            <a-input
              v-if="searchInputVisible"
              class="mobile-input"
              placeholder="ПОИСК"
              @change="searchProduct"
              @pressEnter="searchProduct"
            >
              <template #prefix>
                <SearchOutlined
                  style="color: #636363; border-radius: 8px"
                  class="search-input"
                />
              </template>
            </a-input>
            <img
              v-if="!searchInputVisible"
              src="/img/header/search-icon.svg"
              style="cursor: pointer"
              @click="showSearchInput"
            />
          </div>
          <a-badge :count="basketCount().value">
            <ShopBasket class="text-button ml-16" />
          </a-badge>
          <a-badge>
            <ShopStarred class="text-button ml-8" />
          </a-badge>
          <div class="lang">
            <span>KZ</span>
            <img src="/img/main/lang-arrow-black.png" alt="lang-arrow" />
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
  <div class="bread-crumb-block" v-if="crumbVisible">
    <NuxtLink v-for="(cr, index) in crumb" :key="cr.link" :to="cr.link"
      ><span class="bread-crumb-text">{{ cr.name }} </span>
      <span class="bread-crumb-text" v-if="index !== crumb.length - 1">
        /
      </span></NuxtLink
    >
    <!-- <p class="bread-crumb-text">{{ crumb }}</p> -->
  </div>
</template>
<script>
import { SearchOutlined } from "@ant-design/icons-vue";
import debounce from "lodash.debounce";

export default {
  components: {
    SearchOutlined,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const menuDrawer = ref(false);
    const serahcValue = ref("");

    const searchInputVisible = ref(false);
    const showSearchInput = () => {
      searchInputVisible.value = true;
    };

    const showDrawer = () => {
      menuDrawer.value = true;
    };

    const closeDrawer = () => {
      menuDrawer.value = false;
    };

    const searchProduct = debounce(async (value) => {
      router.push("/catalog/" + value.target.value);
      closeDrawer();
    }, 900);

    const { breadCrumb, breadCrumbVisible } = useBreadCrumb();
    const crumbVisible = breadCrumbVisible();

    const crumb = breadCrumb();
    const { basketCount } = useBasket();

    onMounted(() => {
      const { basketCount } = useBasket();
      if (
        localStorage.getItem("basket") &&
        Array.isArray(JSON.parse(localStorage.getItem("basket")))
      ) {
        let basket = JSON.parse(localStorage.getItem("basket"));
        basketCount().value = basket.length;
      }
    });

    return {
      menuDrawer,
      showDrawer,
      closeDrawer,
      searchProduct,
      serahcValue,
      searchInputVisible,
      showSearchInput,
      crumbVisible,
      crumb,
      basketCount,
    };
  },
};
</script>

<style scoped>
.header-wrapper {
  padding: 16px 80px;
  position: absolute;
  z-index: 200;
  width: 100%;
  top: 0;
  background-color: rgba(255, 255, 255, 0);
}

.logo-right-block {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header-menu {
  display: flex;
  font-size: 16px;
}

.header-menu-item {
  padding: 8px 16px;
  font-weight: 700;
  display: flex;
  cursor: pointer;
  color: rgba(99, 99, 99, 1);
}

.header-menu-item.red {
  color: #d20000;
}

.logo-right-block .ant-input-affix-wrapper {
  border-radius: 8px;
  border: 1px solid #636363;
  height: 40px;
  width: 200px;
}

.popover-title {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  padding: 8px;
}
.popover-menu-item {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  padding: 16px;
}

.header-menu-item:hover {
  border-radius: 8px;
  background-color: rgba(255, 255, 245, 0.3);
}

.header-menu-item.popover-item:hover {
  border: 2px solid #1a120b;
  border-radius: 8px;
  padding: 0;
  background-color: #fff;
  color: black;
}
.header-menu-item:hover .popover-button {
  padding: 6px 14px;
}

.mobile-input-block {
  display: none;
}

.bread-crumb-block {
  padding: 10px 80px;
  margin-top: 112px;
  width: 100%;
}
.bread-crumb-text {
  font-weight: 600;
  font-size: 18px;
  margin: 0;
  text-transform: uppercase;
  color: #636363;
}

.lang {
  color: rgba(26, 18, 11, 1);
  width: 60px;
  height: 38px;
  border: 1px solid rgba(26, 18, 11, 1);
  margin-left: 16px;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .header-wrapper {
    padding: 16px 24px;
  }

  .header-menu {
    overflow-x: scroll;
  }

  .mobile-input-block {
    display: block;
  }

  .web-input {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .logo-right-block .ant-input-affix-wrapper {
    width: 150px;
  }
}
</style>
