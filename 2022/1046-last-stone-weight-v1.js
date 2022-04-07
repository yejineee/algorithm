/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (origStones) {
  let stones = [...origStones];
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    const [y,x] = stones;
    stones = stones.slice(2);
    if (x !== y) {
      stones = [...stones, y - x];
    }
  }
  return stones[0] ?? 0;
};

lastStoneWeight([2,7,4,1,8,1])