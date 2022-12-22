function aVeryBigSum(ar) {
  // Time complexity - O(|ar|)
  return ar.reduce((acc, v) => acc + v, 0);
}
