function fairRations(B) {
  // Time complexity - O(|B|)

  let count = 0;

  for (let i = 0; i < B.length - 1; i++) {
    if (B[i] & 1) {
      B[i + 1]++;
      count += 2;
    }
  }

  return B.at(-1) & 1 ? "NO" : count;
}
