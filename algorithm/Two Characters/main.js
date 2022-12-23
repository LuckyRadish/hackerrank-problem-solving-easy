function alternate(s) {
  // Time complexity - O(n), here n is the length of the string.

  const isAlternating = (t) => {
    return !(t.length < 2 || t.slice(1).some((v, i) => v === t[i]));
  };

  const codes = Array.from(s).map((letter) => letter.charCodeAt(0) - 0x61);

  let maxLen = 0;
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      const t = codes.filter((code) => code === i || code === j);
      if (isAlternating(t) && maxLen < t.length) {
        maxLen = t.length;
      }
    }
  }

  return maxLen;
}
