Node *lca(Node *root, int v1, int v2) {
  Node *cur = root;
  while (cur) {
    if (v1 == cur->data || v2 == cur->data) {
      return cur;
    } else if (v1 < cur->data && v2 < cur->data) {
      cur = cur->left;
    } else if (v1 > cur->data && v2 > cur->data) {
      cur = cur->right;
    } else {
      return cur;
    }
  }
  return NULL;
}
