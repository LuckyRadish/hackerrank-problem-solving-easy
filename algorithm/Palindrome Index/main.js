function palindromeIndex(s) {
  // Time complexity - O(|s|)

  const isPalindrome = (t, head, tail) => {
    while (head < tail) {
      if (t[head++] !== t[tail--]) {
        return false;
      }
    }
    return true;
  };

  if (isPalindrome(s, 0, s.length - 1)) {
    return -1;
  }

  let head = 0, tail = s.length - 1;
  while (s[head] === s[tail]) {
    head++;
    tail--;
  }

  if (isPalindrome(s, head, tail - 1)) {
    return tail;
  }

  if (isPalindrome(s, head + 1, tail)) {
    return head;
  }

  return -1;
}
