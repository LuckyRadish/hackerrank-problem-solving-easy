function birthdayCakeCandles(candles) {
  // Time complexity - O(|candles|)

  let tallest = 0, count = 0;

  for (let i = candles.length - 1; i >= 0; i--) {
    if (tallest < candles[i]) {
      tallest = candles[i];
      count = 1;
    } else if (tallest === candles[i]) {
      count++;
    }
  }

  return count;
}
