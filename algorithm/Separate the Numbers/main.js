function separateNumbers(s) {
  // Time complexity - O(|s|),

  for (let startLen = 1; startLen <= s.length / 2; startLen++) {
    let startNum = BigInt(s.slice(0, startLen));

    let pos = 0;

    for (let num = startNum; pos < s.length && s.startsWith(num, pos); num++) {
      pos += num.toString().length;
    }

    if (pos === s.length) {
      return console.log(`YES ${startNum}`);
    }
  }

  console.log("NO");
}
