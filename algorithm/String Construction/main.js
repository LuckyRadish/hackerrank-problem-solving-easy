function stringConstruction(s) {
  // Time complexity - O(|s|)
  return new Set([...s]).size;
}
