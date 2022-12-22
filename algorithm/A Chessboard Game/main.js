function chessboardGame(x, y) {
  // Time complexity - O(1)
  return ((x & 3) % 3) && ((y & 3) % 3) ? "Second" : "First";
}
