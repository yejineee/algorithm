# [LeetCode] Powerful Integers (in JS)

### ๐ ๋ฌธ์ 

[Powerful Integers](https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/597/week-5-april-29th-april-30th/3726/)

x, y, bound๊ฐ ์ฃผ์ด์ก์ ๋, bound ์ดํ์ ๊ฐ์ ๊ฐ๋ ๋ชจ๋  powerful integers์ ๋ฆฌ์คํธ๋ฅผ ๋ฐํํ๋ผ.
์ด๋ ํ ์ ์๊ฐ `x^i + y^i` (i์ j๋ ์ ์, i >= 0, j >= 0) ์ผ๋ก ๋ํ๋ผ ์ ์์ ๋, powerfulํ๋ค๊ณ  ํ๋ค.
๊ฒฐ๊ณผ์ ๊ฐ์ ์ค๋ณต๋์ด์๋ ์๋๋ค.

### ๐ก Fact
- ์ด๋ ํ ๊ฐ์ด powerfulํ ์ง ๋ชจ๋ฅด๋ฏ๋ก, ๋ชจ๋  x^i์ y^j์ ํฉ์ ๋ฐ์ ธ๋ด์ผ ํ๋ค.
- a^b ๋ ๊ฐ์ ํฉ์ด bound๋ณด๋ค ์๊ฑฐ๋ ๊ฐ์ ๊ฐ์ ๊ตฌํด์ผ ํ๋ค. ์ด ๋, a^b์ ์ต๋๊ฐ์ด ๋  ์ ์๋ ๊ฒฝ์ฐ๋ a^b๊ฐ bound๋ณด๋ค 1 ์์ ๊ฒฝ์ฐ์ด๋ค. a^b๊ฐ bound์ ๊ฐ์ ๊ฒฝ์ฐ์ b์ ๊ฐ์ `log(bound) / log(a)`์ด๋ค. ๊ทธ๋ฆฌ๊ณ  ์ด ๊ฐ์ด powerful integers๋ฅผ ๋ง๋ค ์ ์๋ a^b์ ์ต๋๊ฐ์ด๋ค.
- ์ฆ a^b์์ b์ ๋ฒ์๋ [0, ceil(log(bound) / log(a))] ์ด๋ค. 


### ๐ ์ ๊ทผ

๊ฒฐ๊ณผ๊ฐ ์ค๋ณต๋๋ฉด ์๋๋ฏ๋ก, ์ค๋ณต๋ ๊ฐ์ ํ์ฉํ์ง ์๋ Set์ powerful integers๋ฅผ ์ ์ฅํ๋ค.

1. i์ j์ ์ต๋๊ฐ์ ๊ตฌํ๋ค.
  log(m) / log(n)์์ ๋ฐ์ธ n๋ 1์ผ ์ ์๋ค. ๋ฐ๋ผ์ x๋ y๊ฐ 1์ผ ๊ฒฝ์ฐ๋ ์ต๋ m์ 0์ผ๋ก ์ก๋๋ค.
  ```js
  const maxI = x === 1 ? 0 : Math.floor(Math.log(bound) / Math.log(x));
  ```
2. 1์์ ๊ตฌํ i์ j๋ฅผ ํตํด, a์ b๊ฐ ๋  ์ ์๋ ๋ชจ๋  ๊ฐ์ ๊ตฌํ์ฌ ์ ์ฅํ๋ค.
  ```js
  const candidateA = new Array(maxI + 1).fill().map((_, i) => x ** i);
  ```
3. a์ b์ ๋ชจ๋  ์์ ์ํํ๋ฉฐ, a + b ๊ฐ bound์ดํ์ธ ๊ฐ์ set์ ์ ์ฅํ๋ค.
4. set์ array๋ก ๋ฐ๊พธ์ด ๋ฆฌํดํ๋ค.


### ๐ ์ฝ๋

```javascript
var powerfulIntegers = function (x, y, bound) {
  const maxI = x === 1 ? 0 : Math.floor(Math.log(bound) / Math.log(x));
  const maxJ = y === 1 ? 0 : Math.floor(Math.log(bound) / Math.log(y));

  const candidateA = new Array(maxI + 1).fill().map((_, i) => x ** i);
  const candidateB = new Array(maxJ + 1).fill().map((_, j) => y ** j);

  const powerfulInt = candidateA.reduce((set, a) => {
    candidateB.forEach((b) => {
      if (a + b <= bound) {
        set.add(a + b);
      }
    });
    return set;
  }, new Set());

  return [...powerfulInt];
};
```
