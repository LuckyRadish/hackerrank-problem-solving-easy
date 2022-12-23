function gemstones(arr) {
  // Time complexity - O(Σ(|minerals|))
  return new Array(26)
    .fill(null)
    .map((v, i) =>
      arr.every((rock) => rock.includes(String.fromCharCode(i + 0x61))) ? 1 : 0
    )
    .reduce((acc, v) => acc + v);
}
