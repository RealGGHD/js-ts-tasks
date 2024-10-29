/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let result = 0;
  n < 0 ? (n *= -1) : null;
  for (let i = 0; i < n.toString().length; i++) {
    result += parseInt(n.toString()[i]);
  }
  return result;
};
