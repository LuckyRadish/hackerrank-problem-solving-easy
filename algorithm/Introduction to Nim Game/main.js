function nimGame(pile) {
  // Time complexity - O(|pile|)
  return pile.reduce((acc, v) => acc ^ v) ? "First" : "Second";
}
