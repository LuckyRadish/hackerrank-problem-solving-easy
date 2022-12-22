function luckBalance(k, contests) {
  // Time complexity - O(nlog n), n is |contests|

  let maxLuck = contests
    .filter(([, rate]) => !rate)
    .reduce((acc, [luck]) => acc + luck, 0);

  const importants = contests
    .filter(([, rate]) => rate)
    .map(([luck]) => luck)
    .sort((a, b) => b - a);

  for (let i = 0; i < k && i < importants.length; i++) {
    maxLuck += importants[i];
  }

  for (let i = k; i < importants.length; i++) {
    maxLuck -= importants[i];
  }

  return maxLuck;
}
