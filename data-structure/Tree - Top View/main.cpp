
void topView(Node *root) {
  // Time complexity - O(|tree|)

  if (root == NULL) {
    return;
  }

  queue<pair<Node *, int>> q;

  map<int, int> m;

  q.push(make_pair(root, 0));

  while (!q.empty()) {
    pair<Node *, int> base = q.front(); q.pop();

    if (m.find(base.second) == m.end()) {
      m[base.second] = base.first->data;
    }

    if (base.first->left) {
      q.push(make_pair(base.first->left, base.second - 1));
    }

    if (base.first->right) {
      q.push(make_pair(base.first->right, base.second + 1));
    }
  }

  map<int, int>::iterator it;
  for (it = m.begin(); it != m.end(); it++) {
    cout << it->second << " ";
  }
}
