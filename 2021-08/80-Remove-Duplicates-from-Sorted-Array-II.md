# [LeetCode] 80. Remove Duplicates from Sorted Array II (in JS)

### π λ¬Έμ 

[80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

### π‘ Fact



### π μ κ·Ό

### π§­ λ³΅μ‘λ

- κ³΅κ° λ³΅μ‘λ :
- μκ° λ³΅μ‘λ :

### π§ μκ²λ μ 

### π μ½λ

```javascript

```


### π μ²« λ²μ§Έ νμ΄ - μ½λ

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