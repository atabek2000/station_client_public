<template>
  <div class="header-block">
    <div class="header-wrapper">
      <div class="main-block">
        <div class="logo-block">
          <div>
            <a-input
              v-if="searchInputVisible"
              class="search-input"
              v-model:value="serahcValue"
              placeholder="Search"
              @change="searchProduct"
              @pressEnter="searchProduct"
            >
              <template #prefix>
                <SearchOutlined />
              </template>
              <template #suffix>
                <a-tooltip title="Extra information">
                  <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
                </a-tooltip>
              </template>
            </a-input>
            <img
              v-if="!searchInputVisible"
              src="/img/header/search-icon.svg"
              style="cursor: pointer"
              @click="showSearchInput"
            />
          </div>
          <div class="flex-center">
            <NuxtLink to="/">
              <img src="/img/main/station_logo.png" alt="" />
            </NuxtLink>
          </div>
          <div class="logo-right-block">
            <a-badge :count="basketCount().value">
              <ShopBasket
                class="text-button"
                style="width: 20px; height: 20px"
              />
            </a-badge>
          </div>
        </div>
      </div>
      <div class="nav-block">
        <div class="nav-child">
          <p
            class="nav-child-line"
            :class="
              $route.path === '/catalog/hot' || $route.path === '/catalog/hot/'
                ? 'active'
                : ''
            "
          ></p>
          <p
            class="nav-child-button pointer"
            :class="
              $route.path === '/catalog/hot' || $route.path === '/catalog/hot/'
                ? 'active'
                : ''
            "
          >
            <NuxtLink to="/catalog/hot" class="text-black">Hot</NuxtLink>
          </p>
          <p
            class="nav-child-line"
            :class="
              $route.path === '/catalog/sales' ||
              $route.path === '/catalog/sales/'
                ? 'active'
                : ''
            "
          ></p>
          <p
            class="nav-child-button pointer"
            :class="
              $route.path === '/catalog/sales' ||
              $route.path === '/catalog/sales/'
                ? 'active'
                : ''
            "
          >
            <NuxtLink to="/catalog/sales" class="text-black">Акции</NuxtLink>
          </p>
          <p
            class="nav-child-line"
            :class="
              $route.path === '/catalog/male' ||
              $route.path === '/catalog/male/'
                ? 'active'
                : ''
            "
          ></p>
          <p
            class="nav-child-button pointer"
            :class="
              $route.path === '/catalog/male' ||
              $route.path === '/catalog/male/'
                ? 'active'
                : ''
            "
          >
            <NuxtLink to="/catalog/male" class="text-black">Мужское</NuxtLink>
          </p>
          <p
            class="nav-child-line"
            :class="
              $route.path === '/catalog/female' ||
              $route.path === '/catalog/female/'
                ? 'active'
                : ''
            "
          ></p>
          <p
            class="nav-child-button pointer"
            :class="
              $route.path === '/catalog/female' ||
              $route.path === '/catalog/female/'
                ? 'active'
                : ''
            "
          >
            <NuxtLink to="/catalog/female" class="text-black">Женское</NuxtLink>
          </p>
          <p
            class="nav-child-line"
            :class="
              $route.path === '/catalog/new' || $route.path === '/catalog/new/'
                ? 'active'
                : ''
            "
          ></p>
          <p
            class="nav-child-button pointer"
            :class="
              $route.path === '/catalog/new' || $route.path === '/catalog/new/'
                ? 'active'
                : ''
            "
          >
            <NuxtLink to="/catalog/new" class="text-black">Новинки</NuxtLink>
          </p>
          <p
            class="nav-child-line"
            :class="
              $route.path === '/catalog' || $route.path === '/catalog/'
                ? 'active'
                : ''
            "
          ></p>
          <p
            class="nav-child-button pointer"
            :class="$route.path === '/catalog' ? 'active' : ''"
          >
            <NuxtLink to="/catalog" class="text-black">Каталог</NuxtLink>
          </p>
          <p
            class="nav-child-line"
            :class="$route.path === '/catalog' ? 'active' : ''"
          ></p>
        </div>
      </div>
    </div>
    <div class="mobile-block">
      <div class="mobile-head">
        <div>
          <a-badge :count="basketCount().value">
            <ShopBasket @closeDrawer="closeDrawer" />
          </a-badge>
        </div>
        <div class="mobile-logo">
          <NuxtLink to="/">
            <img src="/img/main/mobile-logo.png" alt="" />
          </NuxtLink>
        </div>

        <div class="mobile-burger">
          <MenuOutlined
            class="mobile-burger-icon"
            @click="showDrawer"
            width="24px"
            height="18px"
          />
        </div>
      </div>
    </div>
    <a-drawer
      v-model:visible="menuDrawer"
      placement="top"
      :closable="false"
      width="100%"
      class="mobile-menu-drawer"
    >
      <template #title>
        <div class="mobile-head">
          <div>
            <a-badge :count="basketCount().value">
              <ShopBasket @closeDrawer="closeDrawer" />
            </a-badge>
          </div>
          <NuxtLink to="/" @click="closeDrawer">
            <img src="/img/main/mobile-logo.png" alt="" />
          </NuxtLink>
          <CloseOutlined
            class="mobile-burger-close-icon"
            @click="closeDrawer"
          />
        </div>
      </template>
      <div class="drawer-body">
        <div class="mobile-search-block">
          <a-input
            class="search-input"
            v-model:value="serahcValue"
            placeholder="Search"
            @change="searchProduct"
          >
            <template #prefix>
              <SearchOutlined />
            </template>
            <template #suffix>
              <a-tooltip title="Extra information">
                <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
              </a-tooltip>
            </template>
          </a-input>
        </div>
        <div class="mobile-menu-block">
          <a-timeline class="menu-timeline">
            <a-timeline-item color="grey">
              <template #dot
                ><div
                  class="timeline-dot"
                  :class="
                    $route.path === '/catalog/hot' ||
                    $route.path === '/catalog/hot/'
                      ? 'active'
                      : ''
                  "
                ></div
              ></template>
              <NuxtLink
                to="/catalog/hot"
                @click="closeDrawer"
                :class="
                  $route.path === '/catalog/hot' ||
                  $route.path === '/catalog/hot/'
                    ? 'active'
                    : ''
                "
              >
                Hot
              </NuxtLink>
            </a-timeline-item>
            <a-timeline-item color="grey"
              ><template #dot
                ><div
                  class="timeline-dot"
                  :class="
                    $route.path === '/catalog/sales' ||
                    $route.path === '/catalog/sales/'
                      ? 'active'
                      : ''
                  "
                ></div></template
              ><NuxtLink
                to="/catalog/sales"
                @click="closeDrawer"
                :class="
                  $route.path === '/catalog/sales' ||
                  $route.path === '/catalog/sales/'
                    ? 'active'
                    : ''
                "
              >
                Акции</NuxtLink
              ></a-timeline-item
            >
            <a-timeline-item color="grey"
              ><template #dot
                ><div
                  class="timeline-dot"
                  :class="
                    $route.path === '/catalog/male' ||
                    $route.path === '/catalog/male/'
                      ? 'active'
                      : ''
                  "
                ></div></template
              ><NuxtLink
                to="/catalog/male"
                @click="closeDrawer"
                :class="
                  $route.path === '/catalog/male' ||
                  $route.path === '/catalog/male/'
                    ? 'active'
                    : ''
                "
              >
                Мужское</NuxtLink
              ></a-timeline-item
            >
            <a-timeline-item color="grey"
              ><template #dot
                ><div
                  class="timeline-dot"
                  :class="
                    $route.path === '/catalog/female' ||
                    $route.path === '/catalog/female/'
                      ? 'active'
                      : ''
                  "
                ></div></template
              ><NuxtLink
                to="/catalog/female"
                @click="closeDrawer"
                :class="
                  $route.path === '/catalog/female' ||
                  $route.path === '/catalog/female/'
                    ? 'active'
                    : ''
                "
              >
                Женское</NuxtLink
              ></a-timeline-item
            >
            <a-timeline-item color="grey"
              ><template #dot
                ><div
                  class="timeline-dot"
                  :class="
                    $route.path === '/catalog/new' ||
                    $route.path === '/catalog/new/'
                      ? 'active'
                      : ''
                  "
                ></div></template
              ><NuxtLink
                to="/catalog/new"
                @click="closeDrawer"
                :class="
                  $route.path === '/catalog/new' ||
                  $route.path === '/catalog/new/'
                    ? 'active'
                    : ''
                "
              >
                Новинки</NuxtLink
              ></a-timeline-item
            >
            <a-timeline-item color="grey"
              ><template #dot
                ><div
                  class="timeline-dot"
                  :class="
                    $route.path === '/catalog' || $route.path === '/catalog/'
                      ? 'active'
                      : ''
                  "
                ></div></template
              ><NuxtLink
                to="/catalog"
                @click="closeDrawer"
                :class="
                  $route.path === '/catalog' || $route.path === '/catalog/'
                    ? 'active'
                    : ''
                "
              >
                Каталог</NuxtLink
              ></a-timeline-item
            >
          </a-timeline>
        </div>
      </div>
    </a-drawer>
    <div class="bread-crumb-block" v-if="crumbVisible">
      <NuxtLink v-for="(cr, index) in crumb" :key="cr.link" :to="cr.link"
        ><span class="bread-crumb-text">{{ cr.name }} </span>
        <span class="bread-crumb-text" v-if="index !== crumb.length - 1">
          /
        </span></NuxtLink
      >
      <!-- <p class="bread-crumb-text">{{ crumb }}</p> -->
    </div>
  </div>
</template>

<script>
import {
  SearchOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons-vue";
import debounce from "lodash.debounce";

export default {
  components: {
    SearchOutlined,
    MenuOutlined,
    CloseOutlined,
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
.header-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-wrapper {
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 200;
}

.main-block {
  width: 95%;
  margin: 0 auto;
}

.logo-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 0%; */
}

.logo-block div {
  width: 33%;
}
/* .logo-block div:nth-child(-n + 3) {
  display: flex;
  justify-content: right;
}

.logo-block div:nth-child(-n + 2) {
  display: flex;
  justify-content: center;
}
.logo-block div:nth-child(-n + 1) {
  display: flex;
  justify-content: left;
} */

.logo-right-block {
  display: flex;
  justify-content: flex-end;
}

.nav-block {
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
.nav-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* max-width: 515px; */
}

.nav-child-button {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 24px 10px 24px;
  font-size: 18px;
}

.nav-child-button.active {
  border: 3px solid black;
  font-weight: 600;
}

.nav-child-line {
  height: 1px;
  width: 100%;
  background-color: black;
  /* border: 1px solid black; */
}

.nav-child-line.active {
  height: 3px;
}

.search-input {
  height: 44px;
  width: 100%;
  border-color: #636363;
}

.mobile-block {
  display: none;
}

.mobile-head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-search-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-search-block .search-input {
  margin-right: 10px;
}

.mobile-menu-block {
  padding-top: 46px;
  border-left: 1px solid #636363;
}

.timeline-dot {
  width: 8px;
  height: 8px;
  border-radius: 7px;
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
}

.timeline-dot.active {
  background-color: black;
}

.bread-crumb-block {
  padding: 0 20px;
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

@media screen and (max-width: 768px) {
  .main-block {
    display: none;
  }

  .nav-block {
    display: none;
  }

  .mobile-block {
    width: 100%;
    padding: 10px 20px;
    display: block;
    position: fixed;
    background: white;
    z-index: 500;
  }

  .bread-crumb-block {
    margin-top: 90px;
  }
}
</style>
