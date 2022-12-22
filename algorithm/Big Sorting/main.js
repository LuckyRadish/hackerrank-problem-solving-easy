function bigSorting(unsorted) {
  // Time complexity - O(nlog n), n is |unsorted|
  return unsorted.sort(
    (a, b) => a.length - b.length || (a > b ? 1 : a < b ? -1 : 0)
  );
}
