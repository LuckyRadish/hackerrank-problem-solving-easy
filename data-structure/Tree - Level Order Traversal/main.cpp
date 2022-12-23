void levelOrder(Node *root) {
  if (root == NULL) {
    return;
  }

  queue<Node *> q;

  q.push(root);

  while (!q.empty()) {
    Node *base = q.front(); q.pop();

    cout << base->data << " ";

    if (base->left) {
      q.push(base->left);
    }

    if (base->right) {
      q.push(base->right);
    }
  }
}
