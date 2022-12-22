#include <iostream>
#include <set>
using namespace std;

int main() {
  // Time complexity - O(nlog n)

  int n;
  cin >> n;

  set<int> s;

  while (n--) {
    int type, value;

    cin >> type;

    if (type == 1) {
      cin >> value;
      s.insert(value);
    } else if (type == 2) {
      cin >> value;
      s.erase(s.find(value));
    } else {
      cout << *s.begin() << endl;
    }
  }

  return 0;
}
