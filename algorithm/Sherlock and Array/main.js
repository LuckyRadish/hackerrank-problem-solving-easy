function balancedSums(arr) {
  // Time complexity - O(|arr|)

  let leftSum = 0, rightSum = arr.reduce((prev, cur) => prev + cur, 0);

  for (const value of arr) {
    rightSum -= value;

    if (leftSum === rightSum) {
      return "YES";
    }

    leftSum += value;
  }

  return "NO";
}
