# [LeetCode] Powerful Integers (in JS)

### 📖 문제

[Powerful Integers](https://leetcode.com/submissions/detail/487253237/?from=explore&item_id=3726)
x, y, bound가 주어졌을 때, bound 이하의 값을 갖는 모든 powerful integers의 리스트를 반환하라.
어떠한 정수가 `x^i + y^i` (i와 j는 정수, i >= 0, j >= 0) 으로 나타낼 수 있을 때, powerful하다고 한다.
결과의 값은 중복되어서는 안된다.

### 💡 Fact
- 어떠한 값이 powerful할지 모르므로, 모든 x^i와 y^j의 합을 따져봐야 한다.
- a^b 두 개의 합이 bound보다 작거나 같은 값을 구해야 한다. 이 때, a^b의 최댓값이 될 수 있는 경우는 a^b가 bound보다 1 작을 경우이다. a^b가 bound와 같을 경우의 b의 값은 `log(bound) / log(a)`이다. 그리고 이 값이 powerful integers를 만들 수 있는 a^b의 최댓값이다.
- 즉 a^b에서 b의 범위는 [1, ceil(log(bound) / log(a))] 이다. 


### 🚎 접근

결과가 중복되면 안되므로, 중복된 값을 허용하지 않는 Set에 powerful integers를 저장한다.

1. i와 j의 최댓값을 구한다.
  log(m) / log(n)에서 밑인 n는 1일 수 없다. 따라서 x나 y가 1일 경우는 최대 m을 0으로 잡는다.
  ```js
  const maxI = x === 1 ? 0 : Math.floor(Math.log(bound) / Math.log(x));
  ```
2. 1에서 구한 i와 j를 통해, a와 b가 될 수 있는 모든 값을 구하여 저장한다.
  ```js
  const candidateA = new Array(maxI + 1).fill().map((_, i) => x ** i);
  ```
3. a와 b의 모든 쌍을 순회하며, a + b 가 bound이하인 값을 set에 저장한다.
4. set을 array로 바꾸어 리턴한다.


### 📝 코드

```javascript
var powerfulIntegers = function (x, y, bound) {
  const maxI = x === 1 ? 0 : Math.floor(Math.log(bound) / Math.log(x));
  const maxJ = y === 1 ? 0 : Math.floor(Math.log(bound) / Math.log(y));

  const candidateA = new Array(maxI + 1).fill().map((_, i) => x ** i);
  const candidateB = new Array(maxJ + 1).fill().map((_, j) => y ** j);

  const powerfulInt = candidateA.reduce((set, a) => {
    candidateB.forEach((b) => {
      if (a + b <= bound) {
        set.add(a + b);
      }
    });
    return set;
  }, new Set());

  return [...powerfulInt];
};
```
