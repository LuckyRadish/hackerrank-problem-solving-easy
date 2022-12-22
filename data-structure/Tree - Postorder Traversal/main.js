function postOrder(root) {
  // Time complexity - O(|tree|)

  function* traverse(root) {
    if (root === null) {
      return;
    }

    yield* traverse(root.left);
    yield* traverse(root.right);

    yield root.data;
  }

  console.log([...traverse(root)].join(" "));
}
