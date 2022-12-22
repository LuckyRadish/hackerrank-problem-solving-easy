function gridChallenge(grid) {
  // Time complexity - O(n²log n), n is |rows|

  const n = grid.length;

  grid = grid.map((row) => Array.from(row).sort());

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (grid[j - 1][i] > grid[j][i]) {
        return "NO";
      }
    }
  }

  return "YES";
}
