function workbook(n, k, arr) {
  // Time complexity - O(Σ(arr) / k), which is the same as O(|pages|)

  let count = 0, page = 1;

  for (let i = 0; i < n; i++) {
    let numberOfPages = Math.ceil(arr[i] / k);
    for (let startProblem = 1; numberOfPages--; startProblem += k, page++) {
      if (page >= startProblem && page < startProblem + k && page <= arr[i]) {
        count++;
      }
    }
  }

  return count;
}
