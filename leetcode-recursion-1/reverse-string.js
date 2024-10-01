/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  const reverse = (left, right) => {
    if (left >= right) {
      return;
    }

    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    return reverse(left + 1, right - 1);
  };

  reverse(0, s.length - 1);
};
