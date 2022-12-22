function taumBday(b, w, bc, wc, z) {
  // Time complexity - O(1)
  return (
    BigInt(b) * (bc < wc + z ? BigInt(bc) : BigInt(wc + z)) +
    BigInt(w) * (wc < bc + z ? BigInt(wc) : BigInt(bc + z))
  );
}
