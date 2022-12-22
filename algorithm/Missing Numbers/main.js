function missingNumbers(arr, brr) {
  // Time complexity - O(|arr| + |brr|)

  let lower = 1e4, upper = 1;
  for (const value of brr) {
    lower = Math.min(lower, value);
    upper = Math.max(upper, value);
  }

  const freq = new Array(upper - lower + 1).fill(0);
  for (const value of brr) {
    freq[value - lower]++;
  }
  for (const value of arr) {
    freq[value - lower]--;
  }

  const missingNumbers = [];
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] > 0) {
      missingNumbers.push(lower + i);
    }
  }

  return missingNumbers;
}
