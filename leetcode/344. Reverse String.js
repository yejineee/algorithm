/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const lValue = s[left];
    const rValue = s[right];

    s[left] = rValue;
    s[right] = lValue;

    left += 1;
    right -= 1;
  }
};
