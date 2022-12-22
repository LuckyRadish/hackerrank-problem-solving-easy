function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Time complexity - O(|apples| + |oranges|)
  const between = (x) => s <= x && x <= t;
  console.log(apples.map((d) => a + d).filter(between).length);
  console.log(oranges.map((d) => b + d).filter(between).length);
}
