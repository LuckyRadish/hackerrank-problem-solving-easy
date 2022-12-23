function pokerNim(k, c) {
  // Time complexity - O(|c|)
  return c.reduce((acc, v) => acc ^ v, 0) ? "First" : "Second";
}
