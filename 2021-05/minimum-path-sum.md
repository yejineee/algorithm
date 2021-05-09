# [LeetCode] 64. Minimum Path Sum (in JS)

### 📖 문제

[64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)
![](https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg)

top-left부터 bottom-right으로 가는 path의 sum 중 최저값을 구하여라.

오른쪽, 아랫쪽으로만 이동할 수 있다.


### 💡 Fact

- [r,c] 까지의 Path는 2가지 경우인데, 이 중 작은 경우만이 Path의 최저합이 된다.
- grid[0][c] (1 <= c < n)에 있는 element로 갈 수 있는 path는 바로 왼쪽의 element로부터이다. 따라서 grid[0][c]에 있는 element의 최저 Path sum은 이전 element(grid[0][c-1])까지의 최저 path sum + 자신의 value(grid[0][c])이다.
- grid[r][0] (1 <= r < m)에 있는 element로 갈 수 있는 path는 바로 위쪽의 element로부터이다. 따라서 grid[r][0]에 있는 element의 최저 Path sum은 이전 element(grid[r-1][0])까지의 최저 path sum + 자신의 value(grid[r][0])이다.
- grid[r][c](1 <= r < m, 1 <= c < n)에 있는 element로 갈 수 있는 경우는 바로 위쪽의 element로부터 혹은, 바로 왼쪽의 element로부터이다. 이 중 최저의 path sum이 되는 경우만이 답이 될 수 있다. 따라서 grid[r][c]에 있는 element의 최저 path sum은 min(grid[r][c] + grid[r-1][c], grid[r][c] + grid[r][c-1])이다.

### 🚎 접근
- r = 0 일 경우의 최저 path sum을 구한다.
- c = 0 일 경우의 최저 path sum을 구한다.
- r != 0, c != 0 일 경우의 최저 path sum을 구한다.

### 🧭 복잡도

- 공간 복잡도 : O(M*N)
- 시간 복잡도 : O(M*N)

### 🧐 알게된 점
처음에는 BFS로 접근하였다. 이 경우에도 답은 될 수 있지만, queue라는 ds를 하나 더 두어야 했다. min을 따져야 하는 경우가 아닌 것부터 계산을 한다면, grid 배열만으로 답을 구할 수 있었다.


### 📝 코드

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
