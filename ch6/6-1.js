export function printOwing(invoice) {

  printBanner();
  calculateOutstanding();
  recordDueDate();
  printDetail();

  let outstanding = 0;
  function calculateOutstanding() {
    for (const o of invoice.orders) {
      outstanding += o.amount;
    }
  }

  function recordDueDate() {
    const today = new Date();
    invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
  }

  function printBanner() {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
  }

  function printDetail() {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
