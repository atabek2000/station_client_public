export default () => {
  const basketCount = () => useState("basket_count", () => 0);

  return { basketCount };
};
