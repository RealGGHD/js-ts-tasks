/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  if (object.hasOwnProperty(prop)) {
    return true;
  } else if (object.hasOwnProperty('key') && prop in Object.prototype) {
    return true;
  } else {
    return false;
  }
};
