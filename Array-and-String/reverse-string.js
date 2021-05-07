/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const swap = (s, x, y) => {
  const temp = s[x];
  s[x] = s[y];
  s[y] = temp;
};
const reverseString = function (s) {
  let head = 0;
  let tail = s.length - 1;
  while (head < tail) {
    swap(s, head, tail);
    head += 1;
    tail -= 1;
  }
};
