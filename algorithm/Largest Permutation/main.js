function largestPermutation(k, arr) {
  // Time complexity - O(|arr|)

  const order = arr.reduce(
    (acc, v, i) => ((acc[v] = i), acc),
    new Array(arr.length + 1)
  );

  let diff = arr.reduce((acc, v, i) => acc + Math.abs(arr.length - i - v), 0);

  let n = arr.length;

  while (diff && k) {
    const [i, j] = [arr.length - n, order[n--]];

    if (i === j) {
      continue;
    }

    diff -= Math.abs(i - arr[i]) + Math.abs(j - arr[j]);

    order[arr[i]] = j;

    [arr[i], arr[j]] = [arr[j], arr[i]];

    diff += Math.abs(i - arr[i]) + Math.abs(j - arr[j]);

    k--;
  }

  return arr;
}
