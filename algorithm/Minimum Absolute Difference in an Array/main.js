function minimumAbsoluteDifference(arr) {
  // Time complexity - O(nlog n), n is |arr|
  return Math.min(
    ...arr
      .sort((a, b) => a - b)
      .slice(1)
      .map((v, i) => v - arr[i])
  );
}
