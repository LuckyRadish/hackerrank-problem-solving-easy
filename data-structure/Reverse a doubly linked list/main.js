function reverse(llist) {
  // Time complexity - O(|llist|)

  let cur = llist, head = null;

  while (cur) {
    [cur.prev, cur.next] = [cur.next, cur.prev];
    [head, cur] = [cur, cur.prev];
  }

  return head;
}
