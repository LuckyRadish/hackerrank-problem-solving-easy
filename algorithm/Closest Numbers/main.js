function closestNumbers(arr) {
  // Time complexity - O(nlog n), n is |arr|

  arr.sort((a, b) => a - b);

  const minDiff = Math.min(...arr.slice(1).map((v, i) => v - arr[i]));

  return arr
    .slice(1)
    .map((v, i) => (v - arr[i] === minDiff ? [arr[i], v] : []))
    .flat();
}
