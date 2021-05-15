/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  for (let c = 0; c < n - 1; c += 1) {
    grid[0][c + 1] = grid[0][c] + grid[0][c + 1];
  }
  for (let r = 0; r < m - 1; r += 1) {
    grid[r + 1][0] = grid[r][0] + grid[r + 1][0];
  }
  for (let r = 1; r < m; r += 1) {
    for (let c = 1; c < n; c += 1) {
      const value = grid[r][c];
      const up = grid[r - 1][c];
      const left = grid[r][c - 1];
      grid[r][c] = Math.min(value + up, value + left);
    }
  }
  return grid[m - 1][n - 1];
};
