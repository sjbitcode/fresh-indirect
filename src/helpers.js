export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function toCurrency(amount) { 
  return "$" + amount.toFixed(2)
}
