function hourglassSum(arr) {
  const delta = [[-1, -1], [-1, 0], [-1, 1], [0, 0], [1, -1], [1, 0], [1, 1]];

  let maxSum = -9 * 7;

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      maxSum = Math.max(
        maxSum,
        delta.reduce((sum, [dr, dc]) => sum + arr[i + dr][j + dc], 0)
      );
    }
  }

  return maxSum;
}
