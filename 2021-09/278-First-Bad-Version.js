/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    let minBadVersion = n;
    while (start <= end) {
      const mid = Math.ceil((start + end) / 2);
      if (isBadVersion(mid)) {
        minBadVersion = Math.min(minBadVersion, mid);
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return minBadVersion;
  };
};
