/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function nums(minNum, maxNum) {
    let result = [];
    for (let i = minNum; i <= maxNum; i++) {
      let temp = 0;
      for (let j = 2; j <= i; j++) {
        if (i % j === 0) {
          temp++;
        }
      }
      if (temp === 1) {
        result.push(i);
      }
    }
    return result;
  }
  return nums;
};
