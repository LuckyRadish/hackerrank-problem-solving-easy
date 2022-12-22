function miniMaxSum(arr) {
  // Time complexity - O(|arr|)
  const sum = arr.reduce((acc, v) => acc + v, 0);
  console.log(sum - Math.max(...arr), sum - Math.min(...arr));
}
