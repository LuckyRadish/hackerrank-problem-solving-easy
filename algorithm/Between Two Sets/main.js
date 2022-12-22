function getTotalX(a, b) {
  const gcd = (a, b) => (!b ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  const lcmA = a.reduce((acc, v) => lcm(acc, v));
  const gcdB = b.reduce((acc, v) => gcd(acc, v));

  if (gcdB % lcmA) {
    return 0;
  }

  // Count the number of factors of gcdB / lcmA

  let ret = 1, count = 0;

  for (let num = gcdB / lcmA, i = 2; i <= num;) {
    if (num % i === 0) {
      num /= i;
      count++;
    } else {
      ret *= (count + 1);
      count = 0;
      i++;
    }
  }

  return ret * (count + 1);
}
