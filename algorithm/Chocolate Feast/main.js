function chocolateFeast(n, c, m) {
  // Time complexity - (log n / log m)

  let wrappers = Math.floor(n / c);

  let total = wrappers;

  while (wrappers >= m) {
    const free = Math.floor(wrappers / m);
    wrappers = (wrappers % m) + free;
    total += free;
  }

  return total;
}
