function funnyString(s) {
  // Time complexity - O(|s|)

  let head = 0, tail = s.length - 1;

  while (head < tail) {
    if (
      Math.abs(s.charCodeAt(head++) - s.charCodeAt(head)) !=
      Math.abs(s.charCodeAt(tail--) - s.charCodeAt(tail))
    ) {
      return "Not Funny";
    }
  }

  return "Funny";
}
