function countingValleys(steps, path) {
  // Time complexity - O(|path|)

  let prevLevel = 0, curLevel = 0;

  let count = 0;

  for (let i = 0; i < steps; i++) {
    curLevel += path[i] === "U" ? 1 : -1;

    if (prevLevel === 0 && curLevel < 0) {
      count++;
    }

    prevLevel = curLevel;
  }

  return count;
}
