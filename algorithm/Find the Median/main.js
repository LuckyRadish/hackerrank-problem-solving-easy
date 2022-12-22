function findMedian(arr) {
  // Time complexity - O(|arr|)

  const partition = (low, high) => {
    let pivot = arr[high], i = low;

    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }

    arr[high] = arr[i];
    arr[i] = pivot;

    return i;
  };

  let left = 0, right = arr.length - 1, k = (arr.length + 1) / 2;

  while (true) {
    const mid = partition(left, right);
    const len = mid - left + 1;

    if (len === k) {
      return arr[mid];
    }

    if (len < k) {
      left = mid + 1;
      k = k - len;
    } else {
      right = mid - 1;
    }
  }
}
