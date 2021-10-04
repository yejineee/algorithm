/**
 * @param {number[]} heights
 * @return {number[]}
 */

const canSeePersonsCount = function (heights) {
  const result = heights.map((height, idx) => {
    let top = null;
    let count = 0;
    for (let i = idx + 1; i < heights.length; i += 1) {
      const anotherPersonHeight = heights[i];
      if (top === null || top <= anotherPersonHeight) {
        count += 1;
        top = anotherPersonHeight;
      }
      if (height < anotherPersonHeight) {
        break;
      }
    }
    return count;
  });
  return result;
};
