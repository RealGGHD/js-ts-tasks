/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
let firstSalary = 100;
let secondSalary = 250;
let thirdSalary = 500;
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  throw new Error('Not implemented');
};
let result = Math.max(firstSalary, secondSalary, thirdSalary) - Math.min(firstSalary, secondSalary, thirdSalary);
//console.log(result); Test
return result;
