function appendAndDelete(s, t, k) {
  // Time complexity - O(min{|s|, |t|})

  let commonPrefixLen = 0;

  while (
    commonPrefixLen < s.length &&
    commonPrefixLen < t.length &&
    s[commonPrefixLen] === t[commonPrefixLen]
  ) {
    commonPrefixLen++;
  }

  const minSteps = s.length + t.length - 2 * commonPrefixLen;

  return minSteps <= k && (k > s.length + t.length || (k - minSteps) % 2 === 0)
    ? "Yes"
    : "No";
}
