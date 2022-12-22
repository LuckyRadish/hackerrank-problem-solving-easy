function maximizingXor(l, r) {
  // Time complexity - O(1)
  return (1 << (Math.log2(l ^ r) + 1)) - 1;
}
