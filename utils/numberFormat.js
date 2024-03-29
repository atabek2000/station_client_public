export default function formatNumber(number) {
  number = Number(number).toFixed(2) + "";
  let x = number.split(".");
  let x1 = x[0];
  // let x2 = x.length > 1 ? "." + x[1] : "";
  let x2 = "";
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + " " + "$2");
  }
  return x1 + x2;
}
