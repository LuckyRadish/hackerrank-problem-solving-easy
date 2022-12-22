function acmTeam(topic) {
  // Time complexity - O(mn²)
  // n is the number of attendees
  // m is the number of topics

  let topics = 0, teams = 0;

  const n = topic.length, m = topic[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let count = 0;

      for (let k = 0; k < m; k++) {
        count += +topic[i][k] | +topic[j][k];
      }

      if (topics < count) {
        topics = count;
        teams = 1;
      } else if (topics === count) {
        teams++;
      }
    }
  }

  return [topics, teams];
}
