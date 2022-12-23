function strangeCounter(t) {
  // Time complexity - O(log t)

  let cycle = 3;
  let time = t;

  while (time > cycle) {
    time -= cycle;
    cycle *= 2;
  }

  return cycle - time + 1;
}
