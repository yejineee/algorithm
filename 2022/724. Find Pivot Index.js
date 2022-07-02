/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  let left = 0;
  let right = nums.reduce((sum, num) => sum + num, 0);

  for (let pivot = 0; pivot < nums.length; pivot++) {
    left += pivot > 0 ? nums[pivot - 1] : 0;
    right -= nums[pivot];
    if (left === right) {
      return pivot;
    }
  }

  return -1;
};
