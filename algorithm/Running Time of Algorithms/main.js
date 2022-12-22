function runningTime(arr) {
  // Time complexity - O(|arr|²)

  let time = 0;

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];

    let j = i - 1;
    while (j >= 0 && value < arr[j]) {
      arr[j + 1] = arr[j];
      time++;
      j--;
    }

    arr[j + 1] = value;
  }

  return time;
}
