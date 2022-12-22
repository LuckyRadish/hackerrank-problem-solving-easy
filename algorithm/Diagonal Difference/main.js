function diagonalDifference(arr) {
  // Time complexity - O(|rows|)

  let diff = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    diff += arr[i][i] - arr[i][arr.length - i - 1];
  }

  return Math.abs(diff);
}
