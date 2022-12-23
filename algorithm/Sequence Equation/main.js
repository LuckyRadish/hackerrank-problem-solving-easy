function permutationEquation(p) {
  // Time complexity - O(|p|)

  const x2y = new Array(p.length);

  for (let y = 1; y <= p.length; y++) {
    const x = p[p[y - 1] - 1];
    x2y[x - 1] = y;
  }

  return x2y;
}
