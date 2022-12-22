function jumpingOnClouds(c, k) {
  // Time complexity - O(|c|)

  let energy = 100, cur = 0;

  do {
    cur = (cur + k) % c.length;
    energy -= 2 * c[cur] + 1;
  } while (cur);

  return energy;
}
