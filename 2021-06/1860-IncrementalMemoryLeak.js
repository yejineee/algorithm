/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
const memLeak = function (memory1, memory2) {
  let sec = 1;
  let mem1 = memory1;
  let mem2 = memory2;

  while (mem1 - sec >= 0 || mem2 - sec >= 0) {
    if (mem1 >= mem2) {
      mem1 -= sec;
    } else {
      mem2 -= sec;
    }
    sec += 1;
  }
  return [sec, mem1, mem2];
};
