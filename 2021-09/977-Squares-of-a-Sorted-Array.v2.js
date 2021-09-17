/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  let head = 0;
  let tail = nums.length - 1;
  const result = new Array(nums.length);

  for (let i = result.length - 1; i >= 0; i -= 1) {
    const squareOfHead = nums[head] ** 2;
    const squareOfTail = nums[tail] ** 2;
    if (squareOfHead < squareOfTail) {
      result[i] = squareOfTail;
      tail -= 1;
    } else {
      result[i] = squareOfHead;
      head += 1;
    }
  }
  return result;
};
