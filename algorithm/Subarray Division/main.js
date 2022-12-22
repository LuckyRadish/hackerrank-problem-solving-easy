function birthday(s, d, m) {
  // Time complexity - O(|s|)

  if (s.length < m) {
    return 0;
  }

  let sum = s.slice(0, m).reduce((prev, cur) => prev + cur, 0);

  let result = sum === d ? 1 : 0;

  for (let i = m; i < s.length; i++) {
    sum += s[i] - s[i - m];
    if (sum === d) {
      result++;
    }
  }

  return result;
}
