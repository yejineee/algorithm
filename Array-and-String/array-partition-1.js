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
