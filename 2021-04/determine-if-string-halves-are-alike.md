# [LeetCode] Determine if String Halves Are Alike (in JS)

### 📖 문제

[Determine if String Halves Are Alike](https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/593/week-1-april-1st-april-7th/3699/)

짝수 길이의 문자열이 들어왔을 때, 같은 길이로 절반을 나눠 두 개의 문자열을 만든다.
앞의 절반을 a, 뒤의 절반을 b라고 하자.
a와 b 각각에 대해 모음('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')의 수를 구한 후, 그 값이 같으면 둘을 alike하다고 한다.
a와 b가 alike한지를 리턴하여라.

### 💡 Fact

- a와 b의 문자열을 각각 한 번씩 순회해야 모음의 수를 알 수 있다.

### 🚎 접근 1 - 문자열을 순회

1. s를 a와 b로 나눈다.
2. 각 문자열을 순회하며 다음을 반복한다.
   - 문자를 소문자로 변환한다.
   - 해당 문자가 'a', 'e', 'i', 'o', 'u'인 경우를 count한다.
3. 2에서 구한 값이 a와 b가 같으면 true, 다르면 false를 반환한다.

### 📝 접근 1 - 코드

```javascript
const countOfVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const count = Array.from(str).reduce(
    (sum, alpha) => sum + (vowels.includes(alpha.toLowerCase()) ? 1 : 0),
    0
  );
  return count;
};

const halvesAreAlike = function (s) {
  const a = s.substring(0, s.length / 2);
  const b = s.substring(s.length / 2);
  return countOfVowels(a) === countOfVowels(b);
};
```

### 🚎 접근 2 - 모음 정규식 사용

다른 사람들의 풀이를 확인했는데, 특이하게 정규식을 사용해서 풀이를 한 것을 보았다. 나도 따라서 정규식으로 모음이 몇 개인지를 확인해보았다.

1. s를 a와 b로 나눈다.
2. 모음 정규식은 [aeiou]이며, flag는 global과 case insensitive를 뜻하는 gi로 한다.
   - case sensitive인 이유는 대문자인 모음과 소문자인 모음 모두를 구하기 위함이다.
3. a와 b 각각을 모음 정규식과 match한 후, 그 길이를 구한다. 만약 match된게 없으면, 길이를 0으로 한다.
4. 3에서 구한 값이 a와 b가 같으면 true, 다르면 false를 반환한다.

### 📝 접근 2 - 코드

```javascript
const countOfVowels = (str) => {
  const vowelRegex = /[aeiou]/gi;
  const matchedResult = str.match(vowelRegex);
  return matchedResult ? matchedResult.length : 0;
};

const halvesAreAlike = function (s) {
  const a = s.substring(0, s.length / 2);
  const b = s.substring(s.length / 2);
  return countOfVowels(a) === countOfVowels(b);
};
```

### 🧭 복잡도

- 공간 복잡도 : O(1)
- 시간 복잡도 : O(N)

### 🧐 알게된 점

1. String.prototype.includes()가 존재한다.
   문자가 모음인지를 확인할 때, 모음 배열을 두고 includes메소드를 사용했었다.
   배열만 가능한 것이 아니라, 스트링에도 includes메소드가 있어서, 이를 활용할 수 있다. 따라서 배열과 문자열 중 더 관리하기 쉬운 것으로 선택하면 되는 것 같다.

   ```javascript
   // Array.prototype.includes()
   const vowels = ["a", "e", "i", "o", "u"];
   const count = Array.from(str).reduce(
     (sum, alpha) => sum + (vowels.includes(alpha.toLowerCase()) ? 1 : 0),
     0
   );

   // String.prototype.includes()
   const vowels = "aeiou";
   const count = Array.from(str).reduce(
     (sum, alpha) => sum + (vowels.includes(alpha.toLowerCase()) ? 1 : 0),
     0
   );
   ```
