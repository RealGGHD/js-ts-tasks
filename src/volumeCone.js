/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  let result = (1 / 3) * r ** 2 * h * Math.PI;
  return result.toFixed(2);
};
