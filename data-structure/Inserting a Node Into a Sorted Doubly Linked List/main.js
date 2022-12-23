function sortedInsert(llist, data) {
  // Time complexity - O(|llist|)

  const newNode = new DoublyLinkedListNode(data);

  if (!llist) {
    return newNode;
  }

  let cur = llist;

  while (cur.next && data > cur.data) {
    cur = cur.next;
  }

  const [prev, next] = data <= cur.data ? [cur.prev, cur] : [cur, cur.next];

  newNode.prev = prev;
  newNode.next = next;

  if (prev) {
    prev.next = newNode;
  }

  if (next) {
    next.prev = newNode;
  }

  return llist.prev || llist;
}
