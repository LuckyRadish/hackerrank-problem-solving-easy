function kangaroo(x1, v1, x2, v2) {
  // Time Complexity - O(1)
  return v1 <= v2 || (x2 - x1) % (v1 - v2) ? "NO" : "YES";
}
