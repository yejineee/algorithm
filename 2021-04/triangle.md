# [LeetCode] Triangle (in JS)

### ๐ ๋ฌธ์ 

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

### ๐ก Fact

- ์ด๋ ํ path์์์ ํฉ์ด ์ต์ ๊ฐ์ผ์ง ์ ์ ์์ผ๋ฏ๋ก, ์ ์ฒด path๋ฅผ ๋ค ํ์ธํด์ผ ํ๋ค.
- ํ์ฌ ์์น์์ ๋ค์ row์ i๋ฒ์งธ์ i+1๋ฒ์งธ๋ก ์ด๋ํ๊ธฐ๊น์ง์ Path๋ ๋์ผํ๋ค. ๋ฐ๋ผ์ ํ์ฌ ์์น๊น์ง์ path์ ํฉ์ ์ ์ฅํด๋๋ฉด ์ค๋ณต๋๋ ๊ณ์ฐ์ ํ์ง ์์ ์ ์๋ค.
- ํ์ฌ ์์น๊น์ง์ path๊ฐ 2๊ฐ ์ด์์ผ ๋, ๋ ์ค path์ ์ต์ ํฉ์ด ํฐ ๊ฒ์ ์ ๋ ์ต์ ํฉ์ด ๋  ์ ์๋ค. ๋ฐ๋ผ์, ํ์ฌ ์์น๊น์ง์ path์ ํฉ์ด ์์ ๊ฒ๋ง ๊ณ์ํด์ ๋ค์ path๋ฅผ ํ์ธํ๋ค.

### ๐ ์ ๊ทผ

์ฒ์ ์ ๊ทผ์ root๋ถํฐ leaf๊น์ง์ path๋ฅผ ํ์ธํ์๋ค. path์ sum์ ์ ์ฅํ array์ ๊ฐ ์ค์์ ๊ฐ์ฅ ์์ ๊ฐ์ ๋ฐํํ๋๋ก ํ์๋ค. ์ด ๋ฐฉ์์ผ๋ก ํ๋ฉด, ๋ง์ง๋ง์ sortํ์ฌ ์ต์ ๊ฐ์ ํ ๋ฒ ๋ ํ์ธํด์ผ ํ๋ค.

๋ค๋ฅธ ์ฌ๋๋ค์ ํ์ด๋ฅผ ๋ณด๋ฉฐ, leaf์์ root๋ก path์ sum์ ๊ตฌํ ํ, root์ ์ต์ข์ ์ผ๋ก ๊ฐ์ฅ ์์ path sum์ ์ ์ฅํ ๊ฒ์ ํ์ธํ  ์ ์์๋ค.
๋ฐ์์ ์๋ก ์ฌ๋ผ๊ฐ๋ ๋ฐฉ์์ ์ ์ฉํ์ฌ, n๋ฒ์งธ row์ i ๋ฒ์งธ node๊ฐ n+1๋ฒ์งธ node์ i์ i+1 node์ path sum์ค ์์ ๊ฐ์ ๊ฐ์ ธ๊ฐ๋๋ก ๊ณ์ฐํ์๋ค. (0 <= n < depth of tree -1). ์ต์ข์ ์ผ๋ก๋ path์ ํฉ์ ๊ตฌํ array์ ์ฒซ ๋ฒ์งธ ์์์ ์ต์ ํฉ์ด ์ ์ฅ๋์ด์์ด ์ด๋ฅผ ๋ฐํํ๋ค.

### ๐งญ ๋ณต์ก๋

N is the total number of rows in the triangle

- ๊ณต๊ฐ ๋ณต์ก๋ : O(N)
- ์๊ฐ ๋ณต์ก๋ : O(N)

### ๐ง ์๊ฒ๋ ์ 

- `!0`์ true์ด๋ค. undefined์ธ์ง ํ์ธํ๊ณ  ์ถ์ ๋๋ `=== undefined`๋ก ํ์คํ๊ฒ ํ์.
- dynamic programming์ ๋ฐ์์ ์๋ก ์ฌ๋ผ๊ฐ๋๊ฑธ๋ก๋ ์๊ฐํ์.

### ๐ Ver1 - ์ฝ๋ : root์์ leaf ๋ฐฉํฅ

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

### ๐ Ver2 - ์ฝ๋ : leaf์์ root ๋ฐฉํฅ

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
