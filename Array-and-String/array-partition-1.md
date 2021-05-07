# [LeetCode] Array Partition I (in JS)

### 📖 문제

[Array Partition I](https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1154/)

`2n`개의 정수가 주어졌을 때, `min(a, b)`(두 쌍의 최소값)의 합이 가장 큰 n개의 쌍으로 그룹지어라.
그리고 최대합을 반환하라.

### 💡 Fact

- 가능한한 큰 값들을 더해야 최대값이 나올 수 있다.
- pair중에서 큰 값은 sum에 들어갈 수 없으니, 그 나머지 숫자가 최대한 크도록 해야 한다.
- 정렬했을 때, 짝수번째 요소의 숫자들이 min(a,b)의 값이 되고 그 합이 최대값이 된다.

### 🚎 접근

1. 오름차순으로 정렬한다.
2. 짝수번째 element만 뽑아낸다.
3. 2번에서 구한 숫자들을 다 더한 후, 반환한다.

### 🧭 복잡도

- 공간 복잡도 : O(N)
- 시간 복잡도 : O(NlogN)

### 🧐 알게된 점

### 📝 코드

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
  const incNums = [...nums].sort((a, b) => a - b);
  const maxSumOfMin = incNums
    .filter((_, i) => i % 2 === 0)
    .reduce((sum, n) => sum + n);

  return maxSumOfMin;
};

```
