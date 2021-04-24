/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const totalHeight = wall.length;
  const countOfEdge = new Map();

  const maxEdgeCount = wall.reduce((maxEdge, row) => {
    row.slice(0, -1).reduce((sumOfWidth, width) => {
      sumOfWidth += width;
      const count = (countOfEdge.get(sumOfWidth) || 0) + 1;
      countOfEdge.set(sumOfWidth, count);
      maxEdge = Math.max(maxEdge, count);
      return sumOfWidth;
    }, 0);
    return maxEdge;
  }, 0);
  return totalHeight - maxEdgeCount;
};
