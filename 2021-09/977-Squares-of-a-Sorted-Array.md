# [LeetCode] 977. Squares of a Sorted Array (in JS)

### π λ¬Έμ 

[977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

μ€λ¦μ°¨μμΌλ‘ μ λ ¬λ μ μ λ°°μ΄μ΄ μ£Όμ΄μ‘μ λ, κ° μ«μμ μ κ³±κ°μ΄ μ€λ¦μ°¨μμΌλ‘ μ λ ¬λ λ°°μ΄μ λ°ννλΌ.

### π‘ Fact
1. |a| <= |b| μΌ λ, |a|^2 <= |b|^2 μ΄λ€.
2. λ°°μ΄μ μ λ μͺ½μ μ«μ nums[i], nums[j] (0 <= i,j < N) μ€, μ λκ°μ΄ λ ν° κ°μ΄ λ°°μ΄μ [i, j] λ²μμμ μ κ³±κ°μ΄ κ°μ₯ ν° κ°μ΄λ€.

### π μ κ·Ό
1. λ°°μ΄μ 0λ²μ§Έ μμμ N-1 λ²μ§Έ μμλ₯Ό κ°λ¦¬ν€λ ν¬μΈν°λ₯Ό μ μΈνλ€.
2. λ€μμ Nλ² λ°λ³΅νλ€. 
   1. κ°μ₯ μμ μμμ κ°μ₯ λμ μμμ μ κ³±κ°μ λΉκ΅νλ€.
   2. κ°μ₯ λμ μμμ μ κ³±κ°μ΄ λ ν¬λ©΄, ν΄λΉ μμλ₯Ό μ λ ¬λ μ κ³± μλ₯Ό λ΄λ λ°°μ΄μ μμ μΆκ°νλ€. κ·Έ ν, κ°μ₯ λμ κ°λ¦¬ν€λ ν¬μΈν°λ₯Ό 1 κ°μμν¨λ€.
   3. κ°μ₯ μμ μμμ μ κ³±κ°μ΄ λ ν¬λ©΄, ν΄λΉ μμλ₯Ό μ λ ¬λ μ κ³± μλ₯Ό λ΄λ λ°°μ΄μ μμ μΆκ°νλ€. κ·Έ ν, κ°μ₯ μμ κ°λ¦¬ν€λ ν¬μΈν°λ₯Ό 1 μ¦κ°μν¨λ€.




### π§ μκ²λ μ 
ν¬ν¬μΈν°λ O(N)λ§μ λλλ€... λ©μλ€.

### π μ½λ

- μκ°λ³΅μ‘λ : O(NlogN)
- κ³΅κ°λ³΅μ‘λ : O(N)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
};

```

- μκ°λ³΅μ‘λ : O(N)
- κ³΅κ°λ³΅μ‘λ : O(N)

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