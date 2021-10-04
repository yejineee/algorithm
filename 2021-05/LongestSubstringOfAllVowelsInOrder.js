/**
 * @param {string} word
 * @return {number}
 */
const longestBeautifulSubstring = function (word) {
  const { maxLen: result } = Array.from(word).reduce(
    ({ start, maxLen, count }, alpha, i) => {
      const prev = word[i - 1];
      if (alpha === 'a') {
        if (count === 0) {
          maxLen = Math.max(maxLen, i - start);
          start = i;
        } else if (prev !== 'a') {
          start = i;
        }
        count = 4;
      } else if (prev < alpha) {
        count -= 1;
      } else if (alpha < prev && count === 0) {
        maxLen = Math.max(maxLen, i - start);
      }
      return { maxLen, count, start };
    },
    { maxLen: 0, start: 0, count: 5 }
  );
  return result;
};
