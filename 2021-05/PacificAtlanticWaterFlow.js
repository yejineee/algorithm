/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const pacificAtlantic = function (heights) {
  const result = [];
  const width = heights[0].length;
  const height = heights.length;
  const checker = new Array(height).fill().map(() => new Array(width).fill());
  const isInBoard = (r, c) => r >= 0 && r < height && c >= 0 && c < width;

  const dfs = (r, c) => {
    checker[r][c] = {};

    dir.forEach(([dr, dc]) => {
      const [nr, nc] = [r + dr, c + dc];
      checker[r][c].p = nr === -1 || nc === -1;
      checker[r][c].a = nr === height || nc === width;
      if (
        !(checker[r][c].a && checker[r][c].p) &&
        isInBoard(nr, nc) &&
        heights[r][c] >= heights[nr][nc]
      ) {
        if (!checker[nr][nc]) {
          dfs(nr, nc);
        }
        checker[r][c].p = checker[r][c].p || checker[nr][nc].p;
        checker[r][c].a = checker[r][c].a || checker[nr][nc].a;
      }
    });
    if (checker[r][c].p && checker[r][c].a) {
      result.push([r, c]);
    }
    console.log(`======  ${r}, ${c} =======`);
    console.dir(checker);
  };
  for (let r = 0; r < height; r += 1) {
    for (let c = 0; c < width; c += 1) {
      if (!checker[r][c]) {
        dfs(r, c);
      }
    }
  }
  return result;
};

const a = pacificAtlantic([
  [3, 3, 3],
  [3, 1, 3],
  [0, 2, 4],
]);

console.log(a);
