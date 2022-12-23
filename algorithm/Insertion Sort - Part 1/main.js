function insertionSort1(n, arr) {
  // Time complexity - O(n), n is |arr|

  const print = () => console.log(arr.join(" "));

  const value = arr[n - 1];

  let i;

  for (i = n - 2; i >= 0 && arr[i] > value; i--) {
    arr[i + 1] = arr[i];
    print();
  }

  arr[i + 1] = value;
  print();
}
