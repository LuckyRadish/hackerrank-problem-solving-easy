function theLoveLetterMystery(s) {
  // Time complexity - O(|s|)

  let result = 0;

  let [head, tail] = [0, s.length - 1];
  while (head < tail) {
    result += Math.abs(s.charCodeAt(head++) - s.charCodeAt(tail--));
  }

  return result;
}
