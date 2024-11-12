/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let temp = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
      temp.length > result.length ? (result = temp) : null;
      temp = [];
    }
  }
  return result;
};
