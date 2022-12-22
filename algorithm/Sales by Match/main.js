function sockMerchant(n, ar) {
  // Time complexity - O(n)
  return ar
    .reduce((acc, color) => (acc[color]++, acc), new Array(101).fill(0))
    .reduce((acc, frequency) => acc + Math.floor(frequency / 2), 0);
}
