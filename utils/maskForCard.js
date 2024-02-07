export default (text) => {
  let nums = String(text).replaceAll(/[\D]+/gi, "");
  if (nums.length > 4) {
    nums = nums.slice(0, 4) + "-" + nums.slice(4);
  }
  if (nums.length > 9) {
    nums = nums.slice(0, 9) + "-" + nums.slice(9);
  }
  if (nums.length > 14) {
    nums = nums.slice(0, 14) + "-" + nums.slice(14, 19);
  }
  return nums;
};
