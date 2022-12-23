function pangrams(s) {
  // Time complexity - O(|s|)
  return new Set(s.toLowerCase().replace(/[^a-z]/g, "")).size === 26
    ? "pangram"
    : "not pangram";
}
