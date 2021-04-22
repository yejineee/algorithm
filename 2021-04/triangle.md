# [LeetCode] Triangle (in JS)

### 📖 문제

[Triangle](https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/595/week-3-april-15th-april-21st/3715/)

Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

```
   2
  3 4
 6 5 7
4 1 8 3
```

The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

### 💡 Fact

- 어떠한 path에서의 합이 최저값일지 알 수 없으므로, 전체 path를 다 확인해야 한다.
- 현재 위치에서 다음 row의 i번째와 i+1번째로 이동하기까지의 Path는 동일하다. 따라서 현재 위치까지의 path의 합을 저장해두면 중복되는 계산을 하지 않을 수 있다.
- 현재 위치까지의 path가 2개 이상일 때, 둘 중 path의 최저합이 큰 것은 절대 최저합이 될 수 없다. 따라서, 현재 위치까지의 path의 합이 작은 것만 계속해서 다음 path를 확인한다.

### 🚎 접근

처음 접근은 root부터 leaf까지의 path를 확인하였다. path의 sum을 저장한 array의 값 중에서 가장 작은 값을 반환하도록 하였다. 이 방식으로 하면, 마지막에 sort하여 최저값을 한 번 더 확인해야 한다.

다른 사람들의 풀이를 보며, leaf에서 root로 path의 sum을 구한 후, root에 최종적으로 가장 작은 path sum을 저장한 것을 확인할 수 있었다.
밑에서 위로 올라가는 방식을 적용하여, n번째 row의 i 번째 node가 n+1번째 node의 i와 i+1 node의 path sum중 작은 값을 가져가도록 계산하였다. (0 <= n < depth of tree -1). 최종적으로는 path의 합을 구한 array의 첫 번째 요소에 최저합이 저장되어있어 이를 반환한다.

### 🧭 복잡도

N is the total number of rows in the triangle

- 공간 복잡도 : O(N)
- 시간 복잡도 : O(N)

### 🧐 알게된 점

- `!0`은 true이다. undefined인지 확인하고 싶을 때는 `=== undefined`로 확실하게 하자.
- dynamic programming을 밑에서 위로 올라가는걸로도 생각하자.

### 📝 Ver1 - 코드 : root에서 leaf 방향

```javascript
const getNumIfExist = (testNum, num) => {
  if (testNum === undefined) {
    return num;
  }
  return Math.min(testNum, num);
};

var minimumTotal = function (triangle) {
  const depth = triangle.length;
  const pathSum = triangle.reduce(
    (prevSum, _, level) => {
      if (level >= depth - 1) {
        return prevSum;
      }
      const newPrevSum = [];
      prevSum.forEach((base, i) => {
        newPrevSum[i] = getNumIfExist(
          newPrevSum[i],
          base + triangle[level + 1][i]
        );
        newPrevSum[i + 1] = getNumIfExist(
          newPrevSum[i + 1],
          base + triangle[level + 1][i + 1]
        );
      });
      return newPrevSum;
    },
    [triangle[0][0]]
  );
  return Math.min(...pathSum);
};
```

### 📝 Ver2 - 코드 : leaf에서 root 방향

```javascript
var minimumTotal = function (triangle) {
  const depth = triangle.length;
  const sum = [...triangle[depth - 1]];
  for (let level = depth - 2; level >= 0; level--) {
    const row = triangle[level];
    row.forEach((base, i) => {
      sum[i] = Math.min(base + sum[i], base + sum[i + 1]);
    });
  }

  return sum[0];
};
```
