function howManyGames(p, d, m, s) {
  // Time complexity of this approach isn't worth being calculated.

  let price = p, result = 0;

  while (s >= price) {
    s -= price;
    price = Math.max(price - d, m);
    result++;
  }

  return result;
}
