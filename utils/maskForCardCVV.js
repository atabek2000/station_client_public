export default (text) => {
  let nums = String(text).replaceAll(/[\D]+/gi, "");

  nums = nums.slice(0, 3);

  return nums;
};
