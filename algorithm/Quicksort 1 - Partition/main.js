function quickSort(arr) {
  // Time complexity - O(|arr|)

  const pivot = arr[0];

  let i = arr.length - 1;

  for (let j = arr.length - 1; j > 0; j--) {
    if (arr[j] > pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i--;
    }
  }

  arr[0] = arr[i];
  arr[i] = pivot;

  return arr;
}
