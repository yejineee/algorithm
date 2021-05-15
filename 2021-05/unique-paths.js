/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  let top = new Array(n).fill(1);
  for (let r = 1; r < m; r += 1) {
    const cur = [];
    cur[0] = 1;
    for (let c = 1; c < n; c += 1) {
      cur[c] = cur[c - 1] + top[c];
    }
    top = cur;
  }
  return top[n - 1];
};
