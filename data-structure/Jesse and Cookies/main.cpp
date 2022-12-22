int cookies(int k, vector<int> A) {
  // Time complexity - O(nlog n), here n is |A.

  priority_queue<int> que;

  vector<int>::iterator it;
  for (it = A.begin(); it != A.end(); it++) {
    que.push(-(*it));
  }

  int moves = 0;

  while (que.size() > 1) {
    int a = que.top(); que.pop();
    int b = que.top(); que.pop();

    if (a <= -k) {
      return moves;
    }

    que.push(a + b * 2);

    moves++;
  }

  return que.top() <= -k ? moves : -1;
}
