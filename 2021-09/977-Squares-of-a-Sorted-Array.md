# [LeetCode] 977. Squares of a Sorted Array (in JS)

### 📖 문제

[977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

오름차순으로 정렬된 정수 배열이 주어졌을 때, 각 숫자의 제곱값이 오름차순으로 정렬된 배열을 반환하라.

### 💡 Fact
1. |a| <= |b| 일 때, |a|^2 <= |b|^2 이다.
2. 배열의 양 끝 쪽의 숫자 nums[i], nums[j] (0 <= i,j < N) 중, 절댓값이 더 큰 값이 배열의 [i, j] 범위에서 제곱값이 가장 큰 값이다.

### 🚎 접근
1. 배열의 0번째 요소와 N-1 번째 요소를 가리키는 포인터를 선언한다.
2. 다음을 N번 반복한다. 
   1. 가장 앞의 요소와 가장 끝의 요소의 제곱값을 비교한다.
   2. 가장 끝의 요소의 제곱값이 더 크면, 해당 요소를 정렬된 제곱 수를 담는 배열의 앞에 추가한다. 그 후, 가장 끝을 가리키는 포인터를 1 감소시킨다.
   3. 가장 앞의 요소의 제곱값이 더 크면, 해당 요소를 정렬된 제곱 수를 담는 배열의 앞에 추가한다. 그 후, 가장 앞을 가리키는 포인터를 1 증가시킨다.




### 🧐 알게된 점
투포인터는 O(N)만에 끝난다... 멋있다.

### 📝 코드

- 시간복잡도 : O(NlogN)
- 공간복잡도 : O(N)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
};

```

- 시간복잡도 : O(N)
- 공간복잡도 : O(N)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  let head = 0;
  let tail = nums.length - 1;
  const result = new Array(nums.length);

  for (let i = result.length - 1; i >= 0; i -= 1) {
    const squareOfHead = nums[head] ** 2;
    const squareOfTail = nums[tail] ** 2;
    if (squareOfHead < squareOfTail) {
      result[i] = squareOfTail;
      tail -= 1;
    } else {
      result[i] = squareOfHead;
      head += 1;
    }
  }
  return result;
};
```