/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagramMap = strs.reduce((prevAnagramMap, str) => {
    const sortedStr = [...str].sort().join('');
    const anagrams = prevAnagramMap.get(sortedStr) || [];
    anagrams.push(str);
    return prevAnagramMap.set(sortedStr, anagrams);
  },new Map());

    return [...anagramMap.values()];
}; 
