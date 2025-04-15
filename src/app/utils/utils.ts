export function calculateDiscountPrice(originalPrice: number, discountPercent: number) {
  const discountRate = discountPercent / 100; // % → 소수
  const discountAmount = originalPrice * discountRate;
  const finalPrice = originalPrice - discountAmount;

  return finalPrice;
}
