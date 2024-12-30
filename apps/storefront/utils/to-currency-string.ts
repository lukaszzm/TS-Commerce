export function toCurrencyString(price: number): string {
  const fixedPrice = price / 100;

  return fixedPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
