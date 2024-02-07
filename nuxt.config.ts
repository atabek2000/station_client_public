import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: "https://maps.api.2gis.ru/2.0/loader.js" }],
    },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: [
    "~/assets/main.css",
    "~/assets/fonts/Montserrat/montserrat.css",
    "ant-design-vue/dist/antd.css",
  ],
  plugins: [
    { src: "~/plugins/antdv.js" },
    { src: "~/plugins/route.client.js" },
  ],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  runtimeConfig: {
    public: {
      //API_HOST: "http://127.0.0.1:8000",
      API_PORT: "8000",
      //API_URL: "http://127.0.0.1:8000/api/v1/",
    },
  },
});
