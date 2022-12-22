function CompareLists(llist1, llist2) {
  // Time complexity - O(min{|llist1|, |llist2|})

  let p1 = llist1, p2 = llist2;

  while (p1 && p2) {
    if (p1.data !== p2.data) {
      return 0;
    }
    [p1, p2] = [p1.next, p2.next];
  }

  return p1 || p2 ? 0 : 1;
}
