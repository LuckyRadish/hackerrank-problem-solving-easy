function serviceLane(n, width, cases) {
  // Time complexity - O(|width||cases|)
  return cases.map(([entry, exit]) =>
    Math.min(...width.slice(entry, exit + 1))
  );
}
