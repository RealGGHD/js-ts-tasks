/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
let firstNumber = 5;
let secondNumber = 10;
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  throw new Error('Not implemented');
};
let result = '';
if (firstNumber > secondNumber) {
  result = '>';
} else if (firstNumber === secondNumber) {
  result = '=';
} else if (firstNumber < secondNumber) {
  result = '<';
} else if (firstNumber <= secondNumber) {
  result = '<=';
} else if (firstNumber >= secondNumber) {
  result = '>=';
}
//console.log(result); Test
return result; //Never show <= and >=.
