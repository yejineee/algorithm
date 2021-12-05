/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s: string): number {
  // Write your code here

  const N_OF_ALPHABET = 26;
  
  const getSignature = (string: string):string => Array.from(string)
    .reduce((alphabetCountArr : number[], char) => {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      alphabetCountArr[index] = alphabetCountArr[index] + 1;
      return alphabetCountArr;
    }, new Array(N_OF_ALPHABET).fill(0))
    .join('')

    const substrCountMap = new Map();
    for(let begin = 0 ; begin < s.length ; begin++){
      for(let end = begin+1 ; end <= s.length; end++){
        const signature = getSignature(s.substring(begin, end));
        const count = substrCountMap.has(signature) ? substrCountMap.get(signature) + 1 : 1;
        substrCountMap.set(signature, count);
      }
    }

  const result = Array.from(substrCountMap.values()).reduce((sum, count) => sum + count*(count-1)*0.5, 0)
  return result;
}