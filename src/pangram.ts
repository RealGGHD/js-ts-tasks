/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  if (typeof word === 'number') {
    const allDigits = '0123456789';
    const preparedStr = word.toString();
    for (let oneDigit of allDigits) {
      if (!preparedStr.includes(oneDigit)) {
        return false;
      }
    }
    return true;
  } else {
    const allLetters = 'abcdefghijklmnopqrstuvwxyz';
    const preparedStr = word.toLowerCase();
    for (let oneLetter of allLetters) {
      if (!preparedStr.includes(oneLetter)) {
        return false;
      }
    }
    return true;
  }
};
