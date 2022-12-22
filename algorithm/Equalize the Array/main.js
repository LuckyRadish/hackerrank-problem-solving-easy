function equalizeArray(arr) {
  // Time complexity - O(|arr|)

  const M = 100;

  const freq = arr.reduce(
    (acc, v) => (acc[v]++, acc),
    new Array(M + 1).fill(0)
  );

  return arr.length - Math.max(...freq);
}
