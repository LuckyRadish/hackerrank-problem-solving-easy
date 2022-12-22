function hurdleRace(k, height) {
  // Time complexity - O(|hurdles|)
  return Math.max(Math.max(...height) - k, 0);
}
