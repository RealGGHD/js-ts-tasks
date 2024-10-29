/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  let result;
  if (str.length > symbolsCount) {
    let tempBack = str.slice(-1 * symbolsCount);
    result = tempBack + str + tempBack;
  } else if (str.length === symbolsCount) {
    result = str + str + str;
  } else {
    result = str;
  }
  return result;
};
