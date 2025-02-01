/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let day, month, year;
  let currentDate;
  if (typeof targetDate === 'string') {
    [day, month, year] = targetDate.split('.').map(Number);
    currentDate = new Date(year, month - 1, day + 1);
  } else {
    currentDate = new Date(targetDate);
  }
  currentDate.setHours(0, 0, 0, 0);
  const newYearDate = new Date(2024, 0, 1);
  newYearDate.setHours(0, 0, 0, 0);
  const different = newYearDate - currentDate;
  const toDays = Math.ceil(different / (1000 * 60 * 60 * 24));
  return toDays;
};
