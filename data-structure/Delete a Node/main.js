function deleteNode(llist, position) {
  // Time complexity - O(position)

  if (!position) {
    return llist.next;
  }

  let cur = llist;
  for (let i = 1; i < position; i++) {
    cur = cur.next;
  }

  cur.next = cur.next.next;

  return llist;
}
