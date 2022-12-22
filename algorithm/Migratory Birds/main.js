function migratoryBirds(arr) {
  // Time complexity - O(|arr|)
  return arr
    .reduce((freq, id) => (freq[id]++, freq), new Array(6).fill(0))
    .reduce((type, frequency, i, f) => (f[type] < frequency ? i : type), 0);
}
