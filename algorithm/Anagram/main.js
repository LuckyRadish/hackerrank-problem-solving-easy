function anagram(s) {
  // Time complexity - O(|s|)

  if (s.length & 1) {
    return -1;
  }

  const freq = new Array(26).fill(0);

  for (let h = 0, t = s.length - 1; h < t; h++, t--) {
    freq[s.charCodeAt(h) - 0x61]++;
    freq[s.charCodeAt(t) - 0x61]--;
  }

  return freq.filter((v) => v > 0).reduce((acc, v) => acc + v, 0);
}
