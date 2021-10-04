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
