/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const TOTAL_ALPHABET_COUNT = 26;
  const getAlphaArrayIndex = (alpha) => alpha.charCodeAt(0) - 'a'.charCodeAt(0);
  const getAlphaCountKey = (str) => [...str]
    .reduce((prevAlphaCountArr, alpha) => {
      prevAlphaCountArr[getAlphaArrayIndex(alpha)] += 1;
      return prevAlphaCountArr;
    }, new Array(TOTAL_ALPHABET_COUNT).fill(0))
    .join('/');

  const anagramMap = strs.reduce((prevAnagramMap, str) => {
    const alphaCountKey = getAlphaCountKey(str);
    const anagrams = prevAnagramMap.get(alphaCountKey) || [];
    anagrams.push(str);
    return prevAnagramMap.set(alphaCountKey, anagrams);
  },new Map());

    return [...anagramMap.values()];
}; 

console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))