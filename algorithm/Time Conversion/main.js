function timeConversion(s) {
  // Time complexity - O(1)

  let [hour, minute, second] = s
    .slice(0, -2)
    .split(":")
    .map((value) => +value);

  hour = (hour % 12) + (s.endsWith("PM") ? 12 : 0);

  return [hour, minute, second]
    .map((value) => value.toString().padStart(2, "0"))
    .join(":");
}
