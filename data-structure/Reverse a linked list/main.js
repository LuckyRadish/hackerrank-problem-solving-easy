function reverse(llist) {
  // Time complexity - O(n), here n is the size of the list.

  let prev = null, cur = llist;

  while (cur) {
    [prev, cur, prev.next] = [cur, cur.next, prev];
  }

  return prev;
}
