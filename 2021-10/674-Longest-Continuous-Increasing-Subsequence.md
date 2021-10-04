

# [LeetCode] 674. Longest Continuous Increasing Subsequence (in JS)

### 📖 문제

[674. Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/)

### 💡 Fact

- 연속적으로 증가하지 않는 수부터 count를 다시 세야 한다.
- 연속적으로 증가하는 수가 가장 긴 subarray를 찾아야 하므로, 바로 이전의 index의 숫자와 현재 숫자를 비교해야 한다.

### 🚎 접근
1. 배열을 순회하며 다음을 확인한다.
   1. 바로 직전의 숫자보다 현재 숫자가 더 크다면, 연속적으로 증가하는 수열이다. count를 1 증가시킨다. 지금까지 가장 큰 count와 비교하여, 더 크다면 maxCount를 count로 바꾼다.
   2. 바로 직전의 숫자보다 현재 숫자가 작거나 같다면, count를 다시 해야 한다. 자기자신을 포함하여 count를 1로 둔다.
   3. 다음 숫자에서 자기 자신과 비교해야 하므로, prevMaxNumber를 자기 자신으로 둔다.
2. maxCount를 반환한다.
### 🧭 복잡도

- 공간 복잡도 : O(1)
- 시간 복잡도 : O(N)
  
### 📝 코드

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
