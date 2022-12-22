function reversePrint(llist) {
  // Time complexity - O(n), here n is the size of the list.

  if (!llist) {
    return;
  }

  reversePrint(llist.next);

  console.log(llist.data);
}
