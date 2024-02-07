export default defineNuxtPlugin((NuxtApp) => {
  const loader = useLoader();

  NuxtApp.hook("page:start", () => {
    loader.startLoading();
  });

  NuxtApp.hook("page:finish", () => {
    loader.stopLoading();
  });
});
