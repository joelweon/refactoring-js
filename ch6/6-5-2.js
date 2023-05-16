export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // boolean flag값 활용은 좋지 않으니 필요한 경우만..
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
