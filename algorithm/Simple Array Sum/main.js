function simpleArraySum(ar) {
  // Time complexity - O(n), here n is the length of ar.

  let sum = 0;

  for (let i = ar.length - 1; i >= 0; i--) {
    sum += ar[i];
  }

  return sum;
}

/*

 * The above solution is optimized for running time,
 * but the following is optimized for the amount of time.

function simpleArraySum(ar) {
  // Time complexity - O(n), here n is the length of ar.
  return ar.reduce((prev, cur) => prev + cur, 0);
}

*/
