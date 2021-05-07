/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function (s) {
  const groupRegex = /1+|0+/g;
  const lenOfGroup = s.match(groupRegex).map((x) => x.length);
  const totalCount = lenOfGroup.reduce((count, len, i) => {
    if (i >= lenOfGroup.length - 1) {
      return count;
    }
    return count + Math.min(len, lenOfGroup[i + 1]);
  }, 0);
  return totalCount;
};
