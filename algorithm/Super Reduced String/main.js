function superReducedString(s) {
  // Time complexity - O(|s|)

  const stk = [];

  for (const letter of s) {
    if (stk.length === 0 || stk.at(-1) !== letter) {
      stk.push(letter);
    } else {
      stk.pop();
    }
  }

  return stk.join("") || "Empty String";
}
