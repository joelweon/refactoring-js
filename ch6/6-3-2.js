export class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get price() {
    const data = this._data;
    const basePrice = data.quantity * data.itemPrice;
    const discount = Math.max(0, data.quantity - 500) * data.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);

    return basePrice - discount + shipping;
  }
}
