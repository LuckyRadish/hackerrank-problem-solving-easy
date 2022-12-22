function dayOfProgrammer(year) {
  // Time complexity - O(1)

  const isLeap = (year) =>
    year % 4 ? false : year % 400 === 0 ? true : !!(year % 100);

  const daysOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year === 1918) {
    daysOfMonth[2] = 15;
  } else if (year < 1918) {
    if (year % 4 === 0) {
      daysOfMonth[2] = 29;
    }
  } else if (isLeap(year)) {
    daysOfMonth[2] = 29;
  }

  let month = 1, day = 256;

  while (day - daysOfMonth[month] > 0) {
    day -= daysOfMonth[month];
    month++;
  }

  return [day, month, year]
    .map((num) => num.toString().padStart(2, "0"))
    .join(".");
}
