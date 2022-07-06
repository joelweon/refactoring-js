export class Order {
  #data;
  constructor(aRecord) {
    this.#data = aRecord;
  }
  
  get quantity() {
    return this.#data.quantity;
  }
  
  get itemPrice() {
    return this.#data.itemPrice;
  }

  get price() {
    return this.basePrice - this.discount + this.shipping;
  }

  get basePrice() {
    return this.#data.quantity * this.#data.itemPrice;
  }
  get discount() {
    return Math.max(0, this.#data.quantity - 500) * this.#data.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.basePrice() * 0.1, 100);
  }
}
