/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  const { arr: result } = nums.reduce(
    ({ arr, sum }, num) => {
      return {
        arr: [...arr, num + sum],
        sum: num + sum,
      };
    },
    { arr: [], sum: 0 }
  );

  return result;
};
