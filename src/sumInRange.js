/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let result = 0;
  const oneNum = parseInt(start);
  const twoNum = parseInt(end);
  if (oneNum < twoNum) {
    for (let i = oneNum; i <= twoNum; i++) {
      result += i;
    }
  } else {
    for (let i = twoNum; i <= oneNum; i++) {
      result += i;
    }
  }
  return result;
};
