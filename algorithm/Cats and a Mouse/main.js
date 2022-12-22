function catAndMouse(x, y, z) {
  // Time complexity - O(1)

  const distA = Math.abs(x - z);
  const distB = Math.abs(y - z);

  return distA < distB ? "Cat A" : distA > distB ? "Cat B" : "Mouse C";
}
