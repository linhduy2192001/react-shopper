export function calculateDiscount(price, real_price) {
  return (((price - real_price) / price) * 100).toFixed(0);
}
