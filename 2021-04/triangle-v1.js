/**
 * @param {number[][]} triangle
 * @return {number}
 * Runtime: 84 ms
 * Memory Usage: 40 MB
 */

const getNumIfExist = (testNum, num) => {
  if (testNum === undefined) {
    return num;
  }
  return Math.min(testNum, num);
};

var minimumTotal = function (triangle) {
  const depth = triangle.length;
  const pathSum = triangle.reduce(
    (prevSum, _, level) => {
      if (level >= depth - 1) {
        return prevSum;
      }
      const newPrevSum = [];
      prevSum.forEach((base, i) => {
        newPrevSum[i] = getNumIfExist(
          newPrevSum[i],
          base + triangle[level + 1][i]
        );
        newPrevSum[i + 1] = getNumIfExist(
          newPrevSum[i + 1],
          base + triangle[level + 1][i + 1]
        );
      });
      return newPrevSum;
    },
    [triangle[0][0]]
  );
  return Math.min(...pathSum);
};

minimumTotal([[-1], [2, 3], [1, -1, -1]]);
