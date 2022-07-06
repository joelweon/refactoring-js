// 표현식을 잘게 쪼개 의미있는 변수로 추출
export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipFee = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - quantityDiscount + shipFee;
}