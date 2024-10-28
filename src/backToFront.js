/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
let str = 'house';
let symbolsCount = 2;
module.exports.backToFront = function backToFront(str, symbolsCount) {
  throw new Error('Not implemented');
};
let tempFront = str.slice(0, symbolsCount);
let tempBack = str.slice(-1 * symbolsCount);
let result = tempFront + str + tempBack;
console.log(result);
return result;
