function getMoneySpent(keyboards, drives, b) {
  // Time complexity - O(|keyboards||drives|)

  let cost = -1;

  for (const keyboard of keyboards) {
    for (const drive of drives) {
      const price = keyboard + drive;
      if (price <= b && cost < price) {
        cost = price;
      }
    }
  }

  return cost;
}
