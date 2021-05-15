# [LeetCode] Unique Paths (in JS)

### 📖 문제

[Unique Paths](https://leetcode.com/problems/unique-paths/)


![스크린샷 2021-05-15 오후 10 31 41](https://user-images.githubusercontent.com/43772082/118363013-555ccb80-b5cd-11eb-901a-4619692ba5fb.png)

로봇은 오른쪽, 아랫쪽으로만 이동할 수 있다.
m * n의 보드에서 start부터 finish까지 가는 unique path의 수는?

### 💡 Fact
- r = 0 인 위치까지 올 수 있는 Path의 방향은 왼쪽에서부터이다.
- c = 0 인 위치까지 올 수 있는 Path의 방향은 위쪽에서부터이다.
- (i, j) (i != 0, j != 0) 의 위치로 올 수 있는 길은 위에서부터 혹은 왼쪽에서 부터이다.
- (i, j)까지 올 수 있는 path는 오른쪽이나 아랫쪽으로 이동할 때도 동일하다.
### 🚎 접근
- r = 0일 때는, 왼쪽 방향에서 올 수 있는 방법 1가지 뿐이다.
- c = 0일 때는, 위쪽 방향에서 올 수 있는 방법 1가지 뿐이다.
- (r, c) 위치일 때의 unique path는 왼쪽 방향인 (r, c-1)까지로부터 오는 path의 수 + 위쪽 방향인 (r-1, c)까지 오는 path의 수이다. (r != 0, c != 0)

### 🧭 복잡도

- 공간 복잡도 : O(N)
- 시간 복잡도 : O(M*N)


### 📝 코드

```javascript
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
```
