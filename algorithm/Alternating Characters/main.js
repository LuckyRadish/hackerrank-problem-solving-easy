function alternatingCharacters(s) {
  // Time complexity - O(|s|)
  return (
    s.length -
    (s.match(/A{1,}/g) || []).length -
    (s.match(/B{1,}/g) || []).length
  );
}
