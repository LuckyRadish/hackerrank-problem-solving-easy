function saveThePrisoner(n, m, s) {
  // Time complexity - O(1)
  return (s + m - 1) % n || n;
}
