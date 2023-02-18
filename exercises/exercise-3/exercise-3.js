let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


// In `exercise-3.js`, you have been provided with a takeout order. 
// Write a program that will print out the receipt for this order.
// - Log each individual item to the console.
// - Log the total cost of the order to the console.

function printReceipt (order)
{
  console.log(`QTY    ITEM                TOTAL`);
  order.forEach(({ itemName, quantity, unitPrice }) => {
    console.log(
      `${quantity.toString().padEnd(7)}${itemName.padEnd(20)}${unitPrice}`
    );
  });
  console.log(
    `Total: ${order.reduce(
      (a, { quantity, unitPrice }) => a + quantity * unitPrice,
      0
    )}`
  );
};

printReceipt(order);
