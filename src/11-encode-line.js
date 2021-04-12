/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let sum = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      sum++;
    } else if (sum === 1) {
      res += str[i];
    } else {
      res += sum + str[i];
      sum = 1;
    }
  }
  return res;
}

module.exports = encodeLine;
