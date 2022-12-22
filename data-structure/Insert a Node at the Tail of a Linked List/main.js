function insertNodeAtTail(head, data) {
  // Time complexity - O(n), here n is the length of the list.

  if (head === null) {
    return new SinglyLinkedListNode(data);
  }

  let cur = head;

  while (cur.next) {
    cur = cur.next;
  }

  cur.next = new SinglyLinkedListNode(data);

  return head;
}
