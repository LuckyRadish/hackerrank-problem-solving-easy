function insertNodeAtPosition(llist, data, position) {
  // Time complexity - O(position)

  const newNode = new SinglyLinkedListNode(data);

  if (!position) {
    newNode.next = llist;
    return newNode;
  }

  let cur = llist;
  for (let i = 1; i < position; i++) {
    cur = cur.next;
  }

  newNode.next = cur.next;
  cur.next = newNode;

  return llist;
}
