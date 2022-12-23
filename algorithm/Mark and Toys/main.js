function maximumToys(prices, k) {
  // Time complexity - O(nlog n), n is |toys|

  prices.sort((a, b) => b - a);

  let count = 0;
  for (let i = prices.length - 1; i >= 0 && k >= prices[i]; k -= prices[i--]) {
    count++;
  }

  return count;
}
