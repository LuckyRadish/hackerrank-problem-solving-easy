function rotateLeft(d, arr) {
  // Time complexity - O(n), here n is the length of arr.
  return arr.map((v, i) => arr[(i + d) % arr.length]);
}
