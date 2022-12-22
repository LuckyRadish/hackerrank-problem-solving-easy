function stones(n, a, b) {
  // Time complexitiy - O(n)

  const [min, diff] = [Math.min(a, b), Math.abs(a - b)];

  const result = [min * (n - 1)];

  if (a === b) {
    return result;
  }

  for (let i = 1; i < n; i++) {
    result.push(result[i - 1] + diff);
  }

  return result;
}
