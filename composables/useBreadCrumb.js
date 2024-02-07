export default () => {
  const breadCrumb = () => useState("crumb", () => [{name: "главная страница", link: "/"}]);
  const breadCrumbVisible = () => useState("crumbVisible", () => false);

  return {
    breadCrumb,
    breadCrumbVisible,
  };
};
