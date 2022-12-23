function weightedUniformStrings(s, queries) {
  // Time complexity - O(n + m),
  // here n is the length of the string,
  // and m is the number of queries.

  const codes = Array.from(s).map((v, i) => s.charCodeAt(i) - 0x60);

  const freq = new Array(27).fill(0);

  for (let head = 0, tail = 0; tail < s.length; tail++) {
    if (s[tail] !== s[head]) {
      head = tail;
    }

    if (freq[codes[tail]] < tail - head + 1) {
      freq[codes[tail]] = tail - head + 1;
    }
  }

  return queries.map((value) => {
    return freq.some(
      (count, weight) => value % weight === 0 && value <= count * weight
    )
      ? "Yes"
      : "No";
  });
}
