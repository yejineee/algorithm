/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const totalHeight = wall.length;
  const countOfEdge = new Map();
  let maxEdgeCount = 0;

  wall.forEach((row) => {
    let sumOfWidth = 0;
    row.slice(0, -1).forEach((width) => {
      sumOfWidth += width;
      const count = (countOfEdge.get(sumOfWidth) || 0) + 1;
      countOfEdge.set(sumOfWidth, count);
      maxEdgeCount = Math.max(maxEdgeCount, count);
    });
  });
  return totalHeight - maxEdgeCount;
};
