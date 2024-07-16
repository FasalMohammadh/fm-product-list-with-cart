function calculateSubTotal(price: number, quantity: number) {
  return price * quantity;
}

function calculateTotal(items: { price: number; quantity: number }[]) {
  return items.reduce(
    (acc, item) => acc + calculateSubTotal(item.price, item.quantity),
    0
  );
}

export { calculateSubTotal, calculateTotal };
