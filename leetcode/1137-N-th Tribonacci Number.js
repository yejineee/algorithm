/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const map = new Map([
    [0, 0],
    [1, 1],
    [2, 1],
  ]);
  if (n < 3) {
    return map[n];
  }
  function calc(value) {
    if (!map.get(value)) {
      map.set(value, calc(value - 3) + calc(value - 2) + calc(value - 1));
    }
    return map.get(value);
  }

  return calc(n);
};

tribonacci(4);
