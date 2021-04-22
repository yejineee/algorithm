/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function (triangle) {
  const depth = triangle.length;
  const sum = [...triangle[depth - 1]];
  for (let level = depth - 2; level >= 0; level--) {
    const row = triangle[level];
    row.forEach((base, i) => {
      sum[i] = Math.min(base + sum[i], base + sum[i + 1]);
    });
  }

  return sum[0];
};
