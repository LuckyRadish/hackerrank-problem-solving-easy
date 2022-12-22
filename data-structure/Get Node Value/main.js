function getNode(llist, positionFromTail) {
  // Time complexity - O(n), here n is the size of the list.

  let [prev, cur] = [null, llist];

  while (cur) {
    cur.prev = prev;
    prev = cur;
    cur = cur.next;
  }

  cur = prev;
  for (let i = 0; i < positionFromTail; i++) {
    cur = cur.prev;
  }

  return cur.data;
}
