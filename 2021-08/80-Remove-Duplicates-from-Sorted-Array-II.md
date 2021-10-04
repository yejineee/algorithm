# [LeetCode] 80. Remove Duplicates from Sorted Array II (in JS)

### 📖 문제

[80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

### 💡 Fact



### 🚎 접근

### 🧭 복잡도

- 공간 복잡도 :
- 시간 복잡도 :

### 🧐 알게된 점

### 📝 코드

```javascript

```


### 📝 첫 번째 풀이 - 코드

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */

const MAX_DUPLICATE_COUNT = 2;
const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i += 1) {
    let firstUpperIdx = nums.findIndex((num) => num > nums[i]);
    if (firstUpperIdx === -1) {
      firstUpperIdx = nums.length;
    }
    if (firstUpperIdx - i >= 3) {
      nums.splice(
        i + MAX_DUPLICATE_COUNT,
        firstUpperIdx - i - MAX_DUPLICATE_COUNT
      );
      i = firstUpperIdx - i - MAX_DUPLICATE_COUNT;
    }
  }
  return nums.length;
};

```