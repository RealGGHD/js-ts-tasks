/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
let n = -1000000;
module.exports.digitsSum = function digitsSum(n) {
  throw new Error('Not implemented'); // remove this line
};
let result = 0;
if (n < 0) {
  n *= -1;
}
for (let i = 0; i < n.toString().length; i++) {
  result += parseInt(n.toString()[i]);
}
//console.log(result); Test
return result;
