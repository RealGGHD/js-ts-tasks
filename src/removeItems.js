/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  let preparedValue = value.toString();
  for (let i = 0; i < arr.length; i++) {
    if (preparedValue === arr[i].toString()) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};
