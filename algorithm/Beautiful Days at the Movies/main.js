function beautifulDays(i, j, k) {
  // Time complexity - O((j - i)lg(j))

  let count = 0;

  for (let day = i; day <= j; day++) {
    let reversedDay = 0;

    for (let num = day; num; num = Math.floor(num / 10)) {
      reversedDay = 10 * reversedDay + (num % 10);
    }

    if ((reversedDay - day) % k === 0) {
      count++;
    }
  }

  return count;
}
