function insertNodeAtHead(head, data) {
  // Time complexity - O(1)
  const newNode = new SinglyLinkedListNode(data);
  newNode.next = head;
  return newNode;
}
