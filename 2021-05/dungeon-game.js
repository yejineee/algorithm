/**
 * @param {number[][]} dungeon
 * @return {number}
 */

const calCurStore = (store, c, point, path) => {
  const healthPoint = path.healthPoint + point;
  const minHP = Math.min(path.minHP, healthPoint);
  store[c] = {
    minHP,
    healthPoint,
  };
};

const calculateMinimumHP = function (dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  let top = [];
  for (let c = 0; c < n; c += 1) {
    const point = dungeon[0][c];
    const path = c === 0 ? { minHP: 0, healthPoint: 0 } : top[c - 1];
    calCurStore(top, c, point, path);
  }
  for (let r = 1; r < m; r += 1) {
    const cur = [];
    calCurStore(cur, 0, dungeon[r][0], top[0]);
    for (let c = 1; c < n; c += 1) {
      const point = dungeon[r][c];
      const path = top[c].minHP > cur[c - 1].minHP ? top[c] : cur[c - 1];
      calCurStore(cur, c, point, path);
    }
    top = cur;
  }
  console.log(top);
  if (top[n - 1].minHP >= 0) {
    return 1;
  }
  return 1 - top[n - 1].minHP;
};

calculateMinimumHP([[-3, 5]]);
