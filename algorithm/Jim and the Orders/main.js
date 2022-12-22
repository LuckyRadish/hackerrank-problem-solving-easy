function jimOrders(orders) {
  // Time complexity - O(nlog n), n is |orders|
  return orders
    .map(([order, prepTime], customer) => ({
      time: order + prepTime,
      customer,
    }))
    .sort((a, b) => a.time - b.time || a.customer - b.customer)
    .map(({ customer }) => customer + 1);
}
