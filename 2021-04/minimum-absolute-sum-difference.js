/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const getLowerBoundIdx = (num, arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

const minAbsoluteSumDiff = function (nums1, nums2) {
  const denominator = 10 ** 9 + 7;
  const incSortedNums1 = [...nums1].sort((a, b) => a - b);
  const origAbsDiff = nums1.map((num1, i) => Math.abs(num1 - nums2[i]));

  const minReplacedAbsDiffArr = nums2.map((num2) => {
    const lowerBoundIdx = getLowerBoundIdx(num2, incSortedNums1);
    const lowerBoundNum = incSortedNums1[lowerBoundIdx];
    if (lowerBoundIdx === 0) {
      return Math.abs(lowerBoundNum - num2);
    }
    const maxLessThanNum2 = incSortedNums1[lowerBoundIdx - 1];
    return Math.min(
      Math.abs(lowerBoundNum - num2),
      Math.abs(maxLessThanNum2 - num2)
    );
  }, 0);

  const { maxDiffIdx } = origAbsDiff.reduce(
    (diffInfo, origDiff, i) => {
      const { maxDiff } = diffInfo;
      if (origDiff - minReplacedAbsDiffArr[i] <= maxDiff) {
        return diffInfo;
      }
      return { maxDiffIdx: i, maxDiff: origDiff - minReplacedAbsDiffArr[i] };
    },
    { maxDiffIdx: 0, maxDiff: origAbsDiff[0] - minReplacedAbsDiffArr[0] }
  );
  const replacedAbsDiff = [...origAbsDiff];
  replacedAbsDiff[maxDiffIdx] = minReplacedAbsDiffArr[maxDiffIdx];

  return replacedAbsDiff.reduce((sum, diff) => (sum + diff) % denominator, 0);
};

console.log(minAbsoluteSumDiff([1, 10, 4, 4, 2, 7], [9, 3, 5, 1, 7, 4]));
