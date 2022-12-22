function findDigits(n) {
  // Time complexity - O(lg n)

  let count = 0;

  for (let cur = n; cur > 0; cur = Math.floor(cur / 10)) {
    const digit = cur % 10;

    if (digit && n % digit === 0) {
      count++;
    }
  }

  return count;
}
