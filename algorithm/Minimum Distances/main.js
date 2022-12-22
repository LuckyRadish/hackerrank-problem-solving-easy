function minimumDistances(a) {
  // Time complexity - O(nlog n), n is |a|

  const pairs = a
    .map((value, key) => ({ key, value }))
    .sort((a, b) => a.value - b.value || a.key - b.key);

  let minDist = -1;

  for (let i = 1; i < pairs.length; i++) {
    if (pairs[i].value === pairs[i - 1].value) {
      const dist = pairs[i].key - pairs[i - 1].key;
      if (minDist < 0 || minDist > dist) {
        minDist = dist;
      }
    }
  }

  return minDist;
}
