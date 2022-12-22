function icecreamParlor(m, arr) {
  // Time complexity - O(nlog n), n is |arr|

  const sorted = arr
    .map((value, key) => ({ key, value }))
    .sort((a, b) => a.value - b.value);

  let head = 0, tail = arr.length - 1;

  while (true) {
    while (sorted[head].value + sorted[tail].value > m) {
      tail--;
    }

    if (sorted[head].value + sorted[tail].value === m) {
      return [sorted[head].key + 1, sorted[tail].key + 1].sort((a, b) => a - b);
    }

    head++;
  }
}
