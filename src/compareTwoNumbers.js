/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  let result = '';
  if (firstNumber > secondNumber) {
    result = '>';
  } else if (firstNumber === secondNumber) {
    result = '=';
  } else if (firstNumber < secondNumber) {
    result = '<';
  }
  return result;
};
