export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useRouter();
  const { breadCrumb, breadCrumbVisible } = useBreadCrumb();
  const crumbVisible = breadCrumbVisible();
  crumbVisible.value = true;

  if (to.path == "/catalog/hot") {
    const crumb = breadCrumb();
    crumb.value = [
      { name: "главная страница", link: "/" },
      { name: "hot", link: "/catalog/hot" },
    ];
  } else if (to.path == "/catalog/sales") {
    const crumb = breadCrumb();
    crumb.value = [
      { name: "главная страница", link: "/" },
      { name: "акции", link: "/catalog/sales" },
    ];
  } else if (to.path == "/catalog/male") {
    const crumb = breadCrumb();
    crumb.value = [
      { name: "главная страница", link: "/" },
      { name: "мужское", link: "/catalog/male" },
    ];
  } else if (to.path == "/catalog/female") {
    const crumb = breadCrumb();
    crumb.value = [
      { name: "главная страница", link: "/" },
      { name: "женское", link: "/catalog/female" },
    ];
  } else if (to.path == "/catalog/new") {
    const crumb = breadCrumb();
    crumb.value = [
      { name: "главная страница", link: "/" },
      { name: "новинки", link: "/catalog/new" },
    ];
  } else if (to.path == "/catalog" || to.path == "/catalog/") {
    const crumb = breadCrumb();
    crumb.value = [
      { name: "главная страница", link: "/" },
      { name: "каталог", link: "/catalog" },
    ];
  } else if (to.path.includes("/catalog")) {
    const crumb = breadCrumb();
    crumb.value = [
      { name: "главная страница", link: "/" },
      { name: "каталог", link: to.path },
    ];
  } else if (to.path.includes("/offer_and_agreement")) {
    const crumb = breadCrumb();
    crumb.value = [
      { name: "главная страница", link: "/" },
      { name: "Оферта и пользовательское соглашение", link: to.path },
    ];
  } else if (to.path == "/" || to.path == "") {
    const crumb = breadCrumb();
    crumb.value = [{ name: "главная страница", link: "/" }];
    crumbVisible.value = false;
  } else if (!to.path.includes("/product")) {
    crumbVisible.value = false;
  }
});
