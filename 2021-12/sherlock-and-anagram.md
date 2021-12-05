# [HackerRank] herlock and Anagrams (in TS)

### 📖 문제

[Sherlock and Anagrams](https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps)

문자열 s가 주어지면, s의 substring인 2개의 짝이 서로의 anagram인 것의 갯수를 구하여라.

s는 소문자 알파벳 a-z로 이루어져있다. 

### 💡 Fact
서로 anagram인 substring을 x, y라고 하자.


- x, y를 이루는 각 문자열의 갯수는 같다.
- s 안에서 substring이 k인 문자열이 n개가 있다면, n개 중에서 2개씩은 서로의 anagram이다.  
- n개 중에 2개를 조합하는 경우의 수는 n * (n-1) * 1/2이다.  

### 🚎 접근
- s를 통해 만들 수 있는 substring을 모두 찾는다.
- 각 substring에 대한 signature를 만든다.
  - signature는 substring을 구성하는 알파벳의 갯수로 이루어진 문자열이다. 
  - 예) 'aca'의 signature는 '201'이다. 
- substring으로 만들 수 있는 signature가 key이고, signature의 갯수가 value인 Map을 만든다.
- Map의 value들에 대하여 n(n-1)*0.5를 계산한 값의 합이 결과이다. 

### 🧭 복잡도
N : s의 길이

- 공간 복잡도 : O(N^2)
  - s의 substring의 수는 n(n+1)/2이고, 각 substring이 모두 Map의 key가 된다면, O(N^2) 만큼의 공간이 필요하다.
- 시간 복잡도 : O(N^3)
  - 모든 substring을 구하는데 O(N^2)이고, 각 substring에 대하여 한 번 순회하여 signature를 만드는데 O(N)이다.

### 🧐 알게된 점

처음엔 signature를 만드는데 정렬을 하였다.
정렬을 한다면, signature를 만드는데 O(NlogN)이 걸리고, 전체 time complexity는 O(N^3logN)이 된다.
"x, y를 이루는 각 문자열의 갯수는 같다."라는 fact를 갖고, 각 알파벳의 위치에 count를 넣어서 signature를 만드는 방식이 신박했다. 


### 📝 코드

```javascript
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
```
