function happyLadybugs(b) {
  // Time complexity - O(|b|)

  if (b.indexOf("_") < 0) {
    return Array.from(b).every(
      (bug, i) =>
        (i > 0 && b[i - 1] === bug) || (i < b.length && b[i + 1] === bug)
    )
      ? "YES"
      : "NO";
  }

  return Array.from(b)
    .reduce((freq, bug) => {
      if (bug !== "_") {
        freq[bug.charCodeAt(0) - 0x41]++;
      }
      return freq;
    }, new Array(26).fill(0))
    .every((value) => value - 1)
    ? "YES"
    : "NO";
}
