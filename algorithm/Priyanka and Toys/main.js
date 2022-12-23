function toys(w) {
  // Time complexity - O(|w|)

  const vst = w.reduce(
    (acc, v) => ((acc[v] = true), acc),
    new Array(1001).fill(false)
  );

  let lower = 0, count = 0;

  while (true) {
    lower = vst.indexOf(true, lower) + 5;
    if (lower < 5) {
      break;
    }
    count++;
  }

  return count;
}
