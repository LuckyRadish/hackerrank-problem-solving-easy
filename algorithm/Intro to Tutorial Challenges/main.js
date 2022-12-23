function introTutorial(V, arr) {
  // Time complexity - O(log |arr|)

  let left = 0, right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === V) {
      return mid;
    }

    if (arr[mid] < V) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return arr[left] === V ? left : -1;
}
