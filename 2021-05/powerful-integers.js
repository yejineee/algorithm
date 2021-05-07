/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */

const powerfulIntegers = function (x, y, bound) {
  const maxI = x === 1 ? 0 : Math.floor(Math.log(bound) / Math.log(x));
  const maxJ = y === 1 ? 0 : Math.floor(Math.log(bound) / Math.log(y));

  const candidateA = new Array(maxI + 1).fill().map((_, i) => x ** i);
  const candidateB = new Array(maxJ + 1).fill().map((_, j) => y ** j);

  const powerfulInt = candidateA.reduce((set, a) => {
    candidateB.forEach((b) => {
      if (a + b <= bound) {
        set.add(a + b);
      }
    });
    return set;
  }, new Set());

  return [...powerfulInt];
};
