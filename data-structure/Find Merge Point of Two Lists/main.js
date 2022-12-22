function findMergeNode(headA, headB) {
  // Time complexity - O(n + m), here n and m are the size of list A and B.

  let pointerA = headA, pointerB = headB;

  while (true) {
    if (pointerA === pointerB) {
      return pointerA.data;
    }

    pointerA = pointerA.next || headB;
    pointerB = pointerB.next || headA;

    if (pointerA === headA && pointerB === headB) {
      break;
    }
  }

  return -1;
}
