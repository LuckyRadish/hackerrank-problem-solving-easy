int height(Node *root) {
  // Time complexity - O(|tree|)

  if (root == NULL) {
    return -1;
  }

  int leftHeight = height(root->left);
  int rightHeight = height(root->right);

  return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
}
