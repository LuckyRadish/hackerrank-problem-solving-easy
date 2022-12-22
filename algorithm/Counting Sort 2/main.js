function countingSort(arr) {
  // Time complexity - O(|arr|)
  return arr
    .reduce((acc, v) => (acc[v]++, acc), new Array(100).fill(0))
    .map((freqency, v) => new Array(freqency).fill(v))
    .flat();
}
