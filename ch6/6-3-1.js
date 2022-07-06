// 표현식을 잘게 쪼개 의미있는 변수로 추출
export function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  // quantityDiscount vs discount
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  // shippingCost vs shipping
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - quantityDiscount + shipFee;
}