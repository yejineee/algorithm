/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

const excludeFirstElement = (data) => data.slice(1);

const isInterleave = function (initS1, initS2, initS3) {
  const queue = [{ s1: initS1, s2: initS2, s3: initS3 }];

  while (queue.length) {
    const { s1, s2, s3 } = queue.shift();

    if (s1.length + s2.length === s3.length) {
      if (s1.length === 0 && s2.length === 0 && s3.length === 0) {
        return true;
      }
      if (s1[0] !== s2[0] && s1[0] === s3[0]) {
        queue.push({
          s1: excludeFirstElement(s1),
          s2,
          s3: excludeFirstElement(s3),
        });
      } else if (s1[0] !== s2[0] && s2[0] === s3[0]) {
        queue.push({
          s1,
          s2: excludeFirstElement(s2),
          s3: excludeFirstElement(s3),
        });
      } else if (s1[0] === s2[0] && s2[0] === s3[0]) {
        queue.push({
          s1: excludeFirstElement(s1),
          s2,
          s3: excludeFirstElement(s3),
        });
        queue.push({
          s1,
          s2: excludeFirstElement(s2),
          s3: excludeFirstElement(s3),
        });
      }
    }
  }

  return false;
};
isInterleave('a', 'b', 'a');
