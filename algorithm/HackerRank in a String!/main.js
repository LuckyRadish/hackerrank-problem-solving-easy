function hackerrankInString(s) {
  // Time complexity - O(|s|)

  const hackerrank = "hackerrank";

  for (let i = 0, j = 0; j < s.length; j++) {
    if (s[j] === hackerrank[i]) {
      if (++i === hackerrank.length) {
        return "YES";
      }
    }
  }

  return "NO";
}
