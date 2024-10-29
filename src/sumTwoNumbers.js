/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let preparedOneStr = firstNumber.toString().replaceAll(' ', '');
  let preparedTwoStr = secondNumber.toString().replaceAll(' ', '');
  let preparedOneFloat = parseFloat(preparedOneStr);
  let preparedTwoFloat = parseFloat(preparedTwoStr);
  let result = preparedOneFloat + preparedTwoFloat;
  return result;
};
