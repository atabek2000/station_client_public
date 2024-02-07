export default () => {
  const runtimeConfig = useRuntimeConfig();
  const { startLoading, stopLoading } = useLoader();

  const currentPage = ref(1);

  const setCurrentPage = (val) => {
    currentPage.value = val;
  };

  const fetchData = async (url, request_params) => {
    request_params.page = currentPage;

    const pag_products = await $fetch(runtimeConfig.public.API_URL + url, {
      params: request_params,
      async onResponseError({ request, response, options }) {
        showFetchError(response);
      },
      onRequest() {
        startLoading();
      },
      onResponse({ response }) {
        stopLoading();
      },
    });
    return pag_products;
  };

  const onScroll = async (url, total_count, request_params) => {
    console.log(
      total_count,
      request_params.page_size * currentPage.value,
      currentPage.value
    );
    const { scrollTop, scrollHeight, clientHeight } = document.body;
    document.getElementById("page-footer").style.height;
    if (
      document.documentElement.scrollTop + clientHeight >=
        document.getElementById("page-footer").offsetTop &&
      total_count > request_params.page_size * currentPage.value
    ) {
      console.log("scroll");
      window.scrollTo(0, document.documentElement.scrollTop - 100);
      startLoading();
      currentPage.value += 1;
      return fetchData(url, request_params);
    }
  };

  return { onScroll, setCurrentPage };
};
