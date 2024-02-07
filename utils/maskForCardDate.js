export default (text) => {
  let nums = String(text).replaceAll(/[\D]+/gi, "");
  if (nums.length > 2) {
    nums = nums.slice(0, 2) + " \\ " + nums.slice(2, 4);
  }
  return nums;
};
