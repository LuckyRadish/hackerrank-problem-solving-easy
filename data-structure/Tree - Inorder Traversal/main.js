function inOrder(root) {
  // Time complexity - O(|tree|)

  function* traverse(root) {
    if (root === null) {
      return;
    }

    yield* traverse(root.left);

    yield root.data;

    yield* traverse(root.right);
  }

  console.log([...traverse(root)].join(" "));
}
