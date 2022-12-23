function printLinkedList(head) {
  // Time complexity - O(n), here n is the size of the list.
  for (let cur = head; cur; cur = cur.next) {
    console.log(cur.data);
  }
}
