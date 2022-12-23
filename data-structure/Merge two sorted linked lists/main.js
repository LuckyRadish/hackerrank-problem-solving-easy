function mergeLists(head1, head2) {
  // Time complexity - O(min{n, m}),
  // here n is the size of the first list,
  // and m is the size of the second list

  if (!head1) {
    return head2;
  }

  if (!head2) {
    return head1;
  }

  if (head1.data < head2.data) {
    head1.next = mergeLists(head1.next, head2);
    return head1;
  }

  head2.next = mergeLists(head1, head2.next);
  return head2;
}
