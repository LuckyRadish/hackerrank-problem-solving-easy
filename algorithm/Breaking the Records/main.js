function breakingRecords(scores) {
  // Time complexity - O(|scores|)

  const breaks = [0, 0];

  let max = scores[0], min = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
      breaks[0]++;
    }
    if (scores[i] < min) {
      min = scores[i];
      breaks[1]++;
    }
  }

  return breaks;
}
