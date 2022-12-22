function designerPdfViewer(h, word) {
  // Time complexity - O(|word|)
  return (
    word.length *
    Math.max(
      ...Array.from(word).map((character) => h[character.charCodeAt(0) - 0x61])
    )
  );
}
