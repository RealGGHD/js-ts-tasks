/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength; i++) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i + 1, 0, 100);
      i++;
      arrayLength++;
    }
  }
  return arr;
};
