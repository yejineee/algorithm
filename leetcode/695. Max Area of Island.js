/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  let maxCount = 0;
  const NOT_VISITED_ISLAND = 1;
  const VISITED_ISLAND = -1;
  const DIR = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  const row = grid.length;
  const col = grid[0].length;

  let count = 0;

  const dfs = (r, c) => {
    grid[r][c] = VISITED_ISLAND;
    count += 1;
    maxCount = Math.max(maxCount, count);
    for (let d = 0; d < DIR.length; d += 1) {
      const [nR, nC] = [r + DIR[d][0], c + DIR[d][1]];
      if (
        nR >= 0 &&
        nR < row &&
        nC >= 0 &&
        nC < col &&
        grid[nR][nC] === NOT_VISITED_ISLAND
      ) {
        dfs(nR, nC);
      }
    }
  };

  for (let r = 0; r < row; r += 1) {
    for (let c = 0; c < col; c += 1) {
      if (grid[r][c] === NOT_VISITED_ISLAND) {
        count = 0;
        dfs(r, c);
      }
    }
  }

  return maxCount;
};
