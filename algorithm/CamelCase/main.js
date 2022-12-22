function camelcase(s) {
  // Time complexity - O(|s|)
  return (s.match(/[A-Z]/g) || []).length + 1;
}
