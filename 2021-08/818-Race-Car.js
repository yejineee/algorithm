/**
 * @param {number} target
 * @return {number}
 */
const racecar = function (target) {
  const queue = [{ position: 0, speed: 1, count: 0 }];
  const visitedPosition = new Set();

  while (queue.length) {
    const { position, speed, count } = queue.shift();
    visitedPosition.add(position);

    const accelerateInfo = {
      position: position + speed,
      speed: speed * 2,
      count: count + 1,
    };
    const reverseInfo = {
      position,
      speed: speed > 0 ? -1 : 1,
      count: count + 1,
    };
    const result = [accelerateInfo, reverseInfo].reduce((ret, info) => {
      if (info.position === target) {
        return info.count;
      }
      if (!visitedPosition.has(info.position)) {
        queue.push(info);
      }
      return ret;
    }, null);
    if (result) {
      return result;
    }
  }
};
console.log(racecar(6));
