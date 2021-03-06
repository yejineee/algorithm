# [LeetCode] 64. Minimum Path Sum (in JS)

### ๐ ๋ฌธ์ 

[64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)
![](https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg)

top-left๋ถํฐ bottom-right์ผ๋ก ๊ฐ๋ path์ sum ์ค ์ต์ ๊ฐ์ ๊ตฌํ์ฌ๋ผ.

์ค๋ฅธ์ชฝ, ์๋ซ์ชฝ์ผ๋ก๋ง ์ด๋ํ  ์ ์๋ค.


### ๐ก Fact

- [r,c] ๊น์ง์ Path๋ 2๊ฐ์ง ๊ฒฝ์ฐ์ธ๋ฐ, ์ด ์ค ์์ ๊ฒฝ์ฐ๋ง์ด Path์ ์ต์ ํฉ์ด ๋๋ค.
- grid[0][c] (1 <= c < n)์ ์๋ element๋ก ๊ฐ ์ ์๋ path๋ ๋ฐ๋ก ์ผ์ชฝ์ element๋ก๋ถํฐ์ด๋ค. ๋ฐ๋ผ์ grid[0][c]์ ์๋ element์ ์ต์  Path sum์ ์ด์  element(grid[0][c-1])๊น์ง์ ์ต์  path sum + ์์ ์ value(grid[0][c])์ด๋ค.
- grid[r][0] (1 <= r < m)์ ์๋ element๋ก ๊ฐ ์ ์๋ path๋ ๋ฐ๋ก ์์ชฝ์ element๋ก๋ถํฐ์ด๋ค. ๋ฐ๋ผ์ grid[r][0]์ ์๋ element์ ์ต์  Path sum์ ์ด์  element(grid[r-1][0])๊น์ง์ ์ต์  path sum + ์์ ์ value(grid[r][0])์ด๋ค.
- grid[r][c](1 <= r < m, 1 <= c < n)์ ์๋ element๋ก ๊ฐ ์ ์๋ ๊ฒฝ์ฐ๋ ๋ฐ๋ก ์์ชฝ์ element๋ก๋ถํฐ ํน์, ๋ฐ๋ก ์ผ์ชฝ์ element๋ก๋ถํฐ์ด๋ค. ์ด ์ค ์ต์ ์ path sum์ด ๋๋ ๊ฒฝ์ฐ๋ง์ด ๋ต์ด ๋  ์ ์๋ค. ๋ฐ๋ผ์ grid[r][c]์ ์๋ element์ ์ต์  path sum์ min(grid[r][c] + grid[r-1][c], grid[r][c] + grid[r][c-1])์ด๋ค.

### ๐ ์ ๊ทผ
- r = 0 ์ผ ๊ฒฝ์ฐ์ ์ต์  path sum์ ๊ตฌํ๋ค.
- c = 0 ์ผ ๊ฒฝ์ฐ์ ์ต์  path sum์ ๊ตฌํ๋ค.
- r != 0, c != 0 ์ผ ๊ฒฝ์ฐ์ ์ต์  path sum์ ๊ตฌํ๋ค.

### ๐งญ ๋ณต์ก๋

- ๊ณต๊ฐ ๋ณต์ก๋ : O(M*N)
- ์๊ฐ ๋ณต์ก๋ : O(M*N)

### ๐ง ์๊ฒ๋ ์ 
์ฒ์์๋ BFS๋ก ์ ๊ทผํ์๋ค. ์ด ๊ฒฝ์ฐ์๋ ๋ต์ ๋  ์ ์์ง๋ง, queue๋ผ๋ ds๋ฅผ ํ๋ ๋ ๋์ด์ผ ํ๋ค. min์ ๋ฐ์ ธ์ผ ํ๋ ๊ฒฝ์ฐ๊ฐ ์๋ ๊ฒ๋ถํฐ ๊ณ์ฐ์ ํ๋ค๋ฉด, grid ๋ฐฐ์ด๋ง์ผ๋ก ๋ต์ ๊ตฌํ  ์ ์์๋ค.


### ๐ ์ฝ๋

```javascript
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

```
