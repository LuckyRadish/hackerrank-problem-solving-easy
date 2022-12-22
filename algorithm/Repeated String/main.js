function repeatedString(s, n) {
  // Time complexity - O(|s|)

  return (
    (s.match(/a/g) || []).length * Math.floor(n / s.length) +
    (s.slice(0, n % s.length).match(/a/g) || []).length
  );
}
