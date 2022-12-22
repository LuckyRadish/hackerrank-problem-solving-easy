function gradingStudents(grades) {
  // Time complexity - O(|grades|)
  return grades.map((v) => (v < 38 || v % 5 < 3 ? v : v + 5 - (v % 5)));
}
