/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
let start = 3;
let end = 5;
module.exports.sumInRange = function sumInRange(start, end) {
  throw new Error('Not implemented');
};
let result = 0;
for (let i = start; i <= end; i++) {
  result += i;
}
//console.log(result); Test
return result;
