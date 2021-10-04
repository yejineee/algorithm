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
