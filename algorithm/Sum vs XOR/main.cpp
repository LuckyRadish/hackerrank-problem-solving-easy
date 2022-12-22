long sumXor(long n) {
  // Time complexity - O(log n)

  long result = 1;

  while (n) {
    if (!(n & 1)) {
      result <<= 1;
    }
    n >>= 1;
  }

  return result;
}
