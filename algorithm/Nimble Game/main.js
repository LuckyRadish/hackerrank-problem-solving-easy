function nimbleGame(s) {
  // Time complexity - O(|s|)
  return s
    .map((v, i) => [v, i])
    .filter(([v]) => v & 1)
    .reduce((a, [, i]) => a ^ i, 0)
    ? "First"
    : "Second";
}
