function compareTriplets(a, b) {
  // Time complexity - O(1)

  let alice = 0, bob = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }

  return [alice, bob];
}
