function beautifulBinaryString(b) {
  // Time complexity - O(|b|)
  return (b.match(/010/g) || []).length;
}
