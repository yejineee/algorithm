/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, color) {
  const DIRECTION = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const centerColor = image[sr][sc];
  const row = image.length;
  const column = image[0].length;
  const Q = [[sr, sc]];
  const visited = new Array(row)
    .fill()
    .map(() => new Array(column).fill(false));

  const isInBoundary = (r, c) => r >= 0 && r < row && c >= 0 && c < column;

  while (Q.length) {
    const [r, c] = Q.shift();
    if (visited[r][c]) {
      continue;
    }
    image[r][c] = color;
    visited[r][c] = true;
    for (let i = 0; i < DIRECTION.length; i++) {
      const [nextR, nextC] = [DIRECTION[i][0] + r, DIRECTION[i][1] + c];
      if (isInBoundary(nextR, nextC)) {
        if (image[nextR][nextC] === centerColor) {
          Q.push([nextR, nextC]);
        }
      }
    }
  }
  return image;
};

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);
