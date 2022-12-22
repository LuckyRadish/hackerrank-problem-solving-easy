function preOrder(root) {
  // Time complexity - O(|tree|)

  function* traverse(root) {
    if (root === null) {
      return;
    }

    yield root.data;

    yield* traverse(root.left);
    yield* traverse(root.right);
  }

  console.log([...traverse(root)].join(" "));
}
