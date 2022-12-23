function gameOfThrones(s) {
  // Time complexity - O(|s|)

  const freq = Array.from(s).reduce(
    (acc, v) => (acc[v.charCodeAt(0) - 0x61]++, acc),
    new Array(26).fill(0)
  );

  return freq.filter((v) => v & 1).length <= 1 ? "YES" : "NO";
}
