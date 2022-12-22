function viralAdvertising(n) {
  // Time complexity - O(n)

  let [shared, liked, cumulative] = [5, 0, 0];

  while (n--) {
    liked = Math.floor(shared / 2);
    cumulative += liked;
    shared = liked * 3;
  }

  return cumulative;
}
