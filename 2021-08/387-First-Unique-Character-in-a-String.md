# [LeetCode] 387. First Unique Character in a String (in JS)

### 📖 문제

[387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

문자열이 주어졌을 때, 처음으로 반복되지 않는 문자를 찾아 그 인덱스를 반환하라. 없으면 -1을 반환하라.

### 🚎 접근
- 문자열을 순회하며, 각 문자가 문자열에서 몇 개 나타나는지 확인한다. 
- 1개 나타나는 문자의 인덱스를 반환한다.
- 문자열 내의 모든 문자가 문자열에서 2개 이상 나타나면 -1을 반환한다.
### 🧭 복잡도

- 공간 복잡도 : O(1)
- 시간 복잡도 : O(N)

### 🧐 알게된 점

#### new RegExp

이 문제를 풀면서 변수를 정규표현식으로 만들어야 했다.
그럴 때 사용할 수 있는게 RegExp 생성자였다.

아래는 모두 같은 정규 표현식을 생성한다.
```javascript
/ab+c/i // 리터럴 표기법 
new RegExp(/ab+c/, 'i') // 정규표현식 리터럴을 받는 생성자
new RegExp('ab+c', 'i') // 스트링을 받는 생성자
```
- 리터럴 표기법
  - 리터럴 표기법은 표현식을 평가할 때 정규 표현식을 컴파일한다.
  - 정규 표현식이 변하지 않으면, 리터럴 표기법을 사용해야 한다.
- RegExp 생성자
  - 정규표현식이 런타임에 컴파일된다.

변수를 사용해야 했기에 RegExp 생성자를 사용하였지만, 시간이 오래걸렸다.

### 📝 코드

```javascript
const firstUniqChar = function (word) {
  for (let i = 0; i < word.length; i += 1) {
    const ch = word[i];
    const regex = new RegExp(ch, 'g');
    const nChInWord = word.match(regex).length;
    if (nChInWord === 1) {
      return i;
    }
  }
  return -1;
};

```
