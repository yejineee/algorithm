

# [LeetCode] 674. Longest Continuous Increasing Subsequence (in JS)

### ๐ ๋ฌธ์ 

[674. Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/)

### ๐ก Fact

- ์ฐ์์ ์ผ๋ก ์ฆ๊ฐํ์ง ์๋ ์๋ถํฐ count๋ฅผ ๋ค์ ์ธ์ผ ํ๋ค.
- ์ฐ์์ ์ผ๋ก ์ฆ๊ฐํ๋ ์๊ฐ ๊ฐ์ฅ ๊ธด subarray๋ฅผ ์ฐพ์์ผ ํ๋ฏ๋ก, ๋ฐ๋ก ์ด์ ์ index์ ์ซ์์ ํ์ฌ ์ซ์๋ฅผ ๋น๊ตํด์ผ ํ๋ค.

### ๐ ์ ๊ทผ
1. ๋ฐฐ์ด์ ์ํํ๋ฉฐ ๋ค์์ ํ์ธํ๋ค.
   1. ๋ฐ๋ก ์ง์ ์ ์ซ์๋ณด๋ค ํ์ฌ ์ซ์๊ฐ ๋ ํฌ๋ค๋ฉด, ์ฐ์์ ์ผ๋ก ์ฆ๊ฐํ๋ ์์ด์ด๋ค. count๋ฅผ 1 ์ฆ๊ฐ์ํจ๋ค. ์ง๊ธ๊น์ง ๊ฐ์ฅ ํฐ count์ ๋น๊ตํ์ฌ, ๋ ํฌ๋ค๋ฉด maxCount๋ฅผ count๋ก ๋ฐ๊พผ๋ค.
   2. ๋ฐ๋ก ์ง์ ์ ์ซ์๋ณด๋ค ํ์ฌ ์ซ์๊ฐ ์๊ฑฐ๋ ๊ฐ๋ค๋ฉด, count๋ฅผ ๋ค์ ํด์ผ ํ๋ค. ์๊ธฐ์์ ์ ํฌํจํ์ฌ count๋ฅผ 1๋ก ๋๋ค.
   3. ๋ค์ ์ซ์์์ ์๊ธฐ ์์ ๊ณผ ๋น๊ตํด์ผ ํ๋ฏ๋ก, prevMaxNumber๋ฅผ ์๊ธฐ ์์ ์ผ๋ก ๋๋ค.
2. maxCount๋ฅผ ๋ฐํํ๋ค.
### ๐งญ ๋ณต์ก๋

- ๊ณต๊ฐ ๋ณต์ก๋ : O(1)
- ์๊ฐ ๋ณต์ก๋ : O(N)
  
### ๐ ์ฝ๋

```javascript

/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
  const { maxCount: result } = nums.reduce(
    ({ count, prevMaxNumber, maxCount }, number) => {
      if (prevMaxNumber === null || number > prevMaxNumber) {
        count += 1;
        maxCount = Math.max(maxCount, count);
      } else {
        count = 1;
      }
      prevMaxNumber = number;
      return { count, prevMaxNumber, maxCount };
    },
    {
      count: 0,
      prevMaxNumber: null,
      maxCount: 0,
    }
  );
  return result;
};

```
