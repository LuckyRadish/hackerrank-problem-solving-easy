Node *insert(Node *root, int data) {
  if (root == NULL) {
    return new Node(data);
  }

  Node *cur = root;

  while (true) {
    Node *&next = data < cur->data ? cur->left : cur->right;

    if (next == NULL) {
      next = new Node(data);
      break;
    }

    cur = next;
  }

  return root;
}
