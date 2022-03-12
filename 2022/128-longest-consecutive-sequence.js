/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  const parentMap = new Map();
  const sequenceLen = {};

  [...numSet].forEach((num) => {
    if (parentMap.has(num + 1)) {
      parentMap.set(num + 1, num);
    }
    parentMap.set(num, parentMap.has(num - 1) ? num - 1 : num);
  });

  const findSequenceLength = (n) => {
    const child = parentMap.get(n);
    if (child === n) {
      return 1;
    }
    if (!sequenceLen[child]) {
      sequenceLen[child] = findSequenceLength(child);
    }
    return sequenceLen[child] + 1;
  };

  const result = [...numSet].reduce((maxLen, num) => {
    if (!sequenceLen[num]) {
      sequenceLen[num] = findSequenceLength(num);
    }
    return maxLen ? Math.max(sequenceLen[num], maxLen) : sequenceLen[num];
  }, 0);

  return result;
};
