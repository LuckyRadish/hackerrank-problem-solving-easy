function flatlandSpaceStations(n, c) {
  // Time complexity - O(|c|)

  c.sort((a, b) => a - b);

  const spaces = [-c[0], ...c, 2 * (n - 1) - c.at(-1)];

  return Math.max(
    ...spaces
      .slice(1)
      .map((pos, i) => Math.floor((pos - spaces[i]) / 2))
  );
}
