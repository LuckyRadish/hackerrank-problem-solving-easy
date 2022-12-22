function circularArrayRotation(a, k, queries) {
  // Time complexity - O(|queries|)

  const n = a.length;

  return queries.map((pos) => a[(pos - (k % n) + n) % n]);
}
