function kaprekarNumbers(p, q) {
  // Time complexity - O(q - p)

  const numbers = [];

  let d = Math.pow(10, Math.floor(Math.log10(p > 1 ? p - 1 : 1)) + 1);

  for (let num = p; num <= q; num++) {
    if (num >= d) {
      d *= 10;
    }

    const sqaure = num * num;

    if (num === Math.floor(sqaure / d) + (sqaure % d)) {
      numbers.push(num);
    }
  }

  console.log(numbers.join(" ") || "INVALID RANGE");
}
