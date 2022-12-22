function equalStacks(h1, h2, h3) {
  // Time complexity - O(max{|h(i)| | i = 1, 2, 3})

  const stk = [h1, h2, h3].map((cylinders) => cylinders.reverse());

  const height = stk.map((cylinders) =>
    cylinders.reduce((prev, cur) => prev + cur, 0)
  );

  while (true) {
    const minHeight = Math.min(...height);

    for (let i = 0; i < 3; i++) {
      while (height[i] > minHeight) {
        height[i] -= stk[i].pop() || 0;
      }
    }

    if (height.every((value) => value === minHeight)) {
      return minHeight;
    }
  }
}
