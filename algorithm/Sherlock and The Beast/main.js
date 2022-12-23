function decentNumber(n) {
  // Time complexity - O(1), this is the time for calculating the number of 5's and 3's.
  // Printing the result takes O(n) time.

  const numOfThrees = [0, 10, 5][n % 3];

  console.log(
    n >= numOfThrees
      ? "5".repeat(n - numOfThrees) + "3".repeat(numOfThrees)
      : -1
  );
}
