function pickingNumbers(a) {
  // Time complexity - O(|a|)

  const freq = a.reduce((acc, v) => (acc[v]++, acc), new Array(100).fill(0));

  return Math.max(...freq.slice(1, -1).map((count, i) => count + freq[i + 2]));
}
