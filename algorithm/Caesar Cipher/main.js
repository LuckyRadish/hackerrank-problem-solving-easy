function caesarCipher(s, k) {
  // Time complexity - O(|s|)
  return Array.from(s)
    .map((letter, i) => {
      const code = s.charCodeAt(i);

      if (code >= 0x41 && code < 0x41 + 26) {
        return String.fromCharCode(((code - 0x41 + k) % 26) + 0x41);
      }

      if (code >= 0x61 && code < 0x61 + 26) {
        return String.fromCharCode(((code - 0x61 + k) % 26) + 0x61);
      }

      return letter;
    })
    .join("");
}
