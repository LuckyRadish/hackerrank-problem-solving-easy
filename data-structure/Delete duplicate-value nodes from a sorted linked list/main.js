function removeDuplicates(llist) {
  // Time complexity - O(n), here n is the size of the list.
  let cur = llist;
  while (cur) {
    let next = cur;
    while (!!next && next.data === cur.data) {
      next = next.next;
    }
    cur.next = next;
    cur = next;
  }
  return llist;
}
