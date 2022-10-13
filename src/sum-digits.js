const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = n.toString().split("");
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    counter += parseInt(str[i]);
  }

  if (counter < 10) {
    return counter;
  } else {
    return getSumOfDigits(counter);
  }
}


module.exports = {
  getSumOfDigits
};
