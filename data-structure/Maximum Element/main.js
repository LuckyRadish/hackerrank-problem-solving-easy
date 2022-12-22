function getMax(operations) {
  // Time complexity - O(|operations|)

  const stk = [];

  let maxElem = 0;

  const result = [];

  for (const operation of operations) {
    const [type, value] = operation.split(" ");

    switch (type) {
      case "1":
        if (!stk.length) {
          stk.push((maxElem = +value));
        } else if (+value <= maxElem) {
          stk.push(+value);
        } else {
          stk.push(2 * +value - maxElem);
          maxElem = +value;
        }
        break;

      case "2":
        if (stk.length) {
          const t = stk.pop();
          if (t > maxElem) {
            maxElem = 2 * maxElem - t;
          }
        }
        break;

      case "3":
        result.push(maxElem);
        break;
    }
  }

  return result;
}
