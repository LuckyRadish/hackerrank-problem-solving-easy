function gridSearch(G, P) {
  // Time complexity - O(RCrc)

  const [R, C, r, c] = [G.length, G[0].length, P.length, P[0].length];

  for (let i = 0; i <= R - r; i++) {
    for (let j = 0; j <= C - c; j++) {
      if (P.every((row, k) => G[i + k].startsWith(row, j))) {
        return "YES";
      }
    }
  }

  return "NO";
}
