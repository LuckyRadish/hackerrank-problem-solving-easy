function bonAppetit(bill, k, b) {
  // Time complexity - O(|bill|)
  const sum = bill.reduce((acc, v) => acc + v);
  console.log(b - (sum - bill[k]) / 2 || "Bon Appetit");
}
