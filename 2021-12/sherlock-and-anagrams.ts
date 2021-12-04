/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s: string): number {
    // Write your code here
    const maxSubstringLength = s.length -1;
    const substrCountMap = new Map();
    for(let begin = 0 ; begin < s.length ; begin++){
      const maxEndIndex = Math.min(begin+maxSubstringLength, s.length);
      for(let end = begin+1 ; end <= maxEndIndex; end++){
        const substring = Array.from(s.substring(begin, end)).sort().join('');
        const prevCount = substrCountMap.has(substring) ? substrCountMap.get(substring) : 0;
        substrCountMap.set(substring, prevCount+1);
      }
    }

  const result = Array.from(substrCountMap.values()).reduce((sum, count) => sum + count*(count-1)*0.5, 0)
  return result;
}