/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  const result = new Array(nums.length);
  for (let i = 0; i < nums.length; i += 1) {
    result[(i + k) % nums.length] = nums[i];
  }
  return result;
};

console.log(rotate([1, 2], 5));
