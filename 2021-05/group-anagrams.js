/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const sortStr = (str) => Array.from(str).sort().join('');
const makeSortInfo = (strs) =>
  strs.map((str) => ({ sortedStr: sortStr(str), orig: str }));

const groupAnagrams = function (strs) {
  const infoStrs = makeSortInfo(strs);
  const sortBySortedStr = (a, b) => a.sortedStr < b.sortedStr;
  infoStrs.sort(sortBySortedStr);
  const result = infoStrs.reduce((group, { sortedStr, orig }) => {
    const lastGroup = group[group.length - 1];
    if (group.length === 0 || lastGroup[0].sortedStr !== sortedStr) {
      group.push([{ sortedStr, orig }]);
    } else {
      lastGroup.push({ sortedStr, orig });
    }
    return group;
  }, []);
  return result.map((v) => v.map((n) => n.orig));
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
