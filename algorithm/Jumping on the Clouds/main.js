function jumpingOnClouds(c) {
  // Time complexity - O(|c|)
  return (
    c
      .join("")
      .match(/0{1,}/g)
      .reduce((acc, { length }) => acc + Math.floor(length / 2) + 1, 0) - 1
  );
}
