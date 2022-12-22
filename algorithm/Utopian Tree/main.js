function utopianTree(n) {
  // Time complexity - O(1)
  return (1 << (Math.ceil(n / 2) + 1)) - (n % 2) - 1;
}
