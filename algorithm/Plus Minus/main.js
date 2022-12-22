function plusMinus(arr) {
  // Time complexity - O(|arr|)
  arr
    .reduce(
      (acc, v) => (acc[(Math.sign(v) + 2) % 3]++, acc),
      new Array(3).fill(0)
    )
    .forEach((count) => console.log(Number(count / arr.length).toFixed(6)));
}
