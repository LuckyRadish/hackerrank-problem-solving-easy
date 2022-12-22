function angryProfessor(k, a) {
  // Time complexity - O(|a|)
  return a.filter((time) => time <= 0).length < k ? "YES" : "NO";
}
