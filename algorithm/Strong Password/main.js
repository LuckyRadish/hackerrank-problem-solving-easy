function minimumNumber(n, password) {
  // Time complexity - O(n), here n is the length of the password.

  const requirements = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+]/];

  const minLength =
    n + requirements.filter((exp) => password.search(exp) < 0).length;

  return Math.max(minLength, 6) - n;
}
