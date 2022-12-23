function beautifulTriplets(d, arr) {
  // Time complexity - O(n), here n is the size of the array.

  let count = 0;

  for (let i = 0, j = 0, k = 0; i < arr.length; i++) {
    while (j < arr.length && arr[j] - arr[i] < d) {
      j++;
    }

    if (j === arr.length) {
      return count;
    }

    if (arr[j] - arr[i] === d) {
      while (k < arr.length && arr[k] - arr[j] < d) {
        k++;
      }

      if (k === arr.length) {
        return count;
      }

      if (arr[k] - arr[j] === d) {
        count++;
      }
    }
  }

  return count;
}
