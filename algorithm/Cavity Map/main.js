function cavityMap(grid) {
  // Time complexity - O(|grid|)

  const n = grid.length;

  const map = grid.map((row) => [...row]);

  const delta = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let row = 1; row < n - 1; row++) {
    for (let col = 1; col < n - 1; col++) {
      if (
        delta.every(([dr, dc]) => +grid[row][col] > +grid[row + dr][col + dc])
      ) {
        map[row][col] = "X";
      }
    }
  }

  return map.map((row) => row.join(""));
}
