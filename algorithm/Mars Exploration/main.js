function marsExploration(s) {
  // Time complexity - O(|s|)
  return Array.from(s).filter((letter, i) => letter !== "SOS"[i % 3]).length;
}
