# [LeetCode] Determine if String Halves Are Alike (in JS)

### ๐ ๋ฌธ์ 

[Determine if String Halves Are Alike](https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/593/week-1-april-1st-april-7th/3699/)

์ง์ ๊ธธ์ด์ ๋ฌธ์์ด์ด ๋ค์ด์์ ๋, ๊ฐ์ ๊ธธ์ด๋ก ์ ๋ฐ์ ๋๋  ๋ ๊ฐ์ ๋ฌธ์์ด์ ๋ง๋ ๋ค.
์์ ์ ๋ฐ์ a, ๋ค์ ์ ๋ฐ์ b๋ผ๊ณ  ํ์.
a์ b ๊ฐ๊ฐ์ ๋ํด ๋ชจ์('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')์ ์๋ฅผ ๊ตฌํ ํ, ๊ทธ ๊ฐ์ด ๊ฐ์ผ๋ฉด ๋์ alikeํ๋ค๊ณ  ํ๋ค.
a์ b๊ฐ alikeํ์ง๋ฅผ ๋ฆฌํดํ์ฌ๋ผ.

### ๐ก Fact

- a์ b์ ๋ฌธ์์ด์ ๊ฐ๊ฐ ํ ๋ฒ์ฉ ์ํํด์ผ ๋ชจ์์ ์๋ฅผ ์ ์ ์๋ค.

### ๐ ์ ๊ทผ 1 - ๋ฌธ์์ด์ ์ํ

1. s๋ฅผ a์ b๋ก ๋๋๋ค.
2. ๊ฐ ๋ฌธ์์ด์ ์ํํ๋ฉฐ ๋ค์์ ๋ฐ๋ณตํ๋ค.
   - ๋ฌธ์๋ฅผ ์๋ฌธ์๋ก ๋ณํํ๋ค.
   - ํด๋น ๋ฌธ์๊ฐ 'a', 'e', 'i', 'o', 'u'์ธ ๊ฒฝ์ฐ๋ฅผ countํ๋ค.
3. 2์์ ๊ตฌํ ๊ฐ์ด a์ b๊ฐ ๊ฐ์ผ๋ฉด true, ๋ค๋ฅด๋ฉด false๋ฅผ ๋ฐํํ๋ค.

### ๐ ์ ๊ทผ 1 - ์ฝ๋

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

### ๐ ์ ๊ทผ 2 - ๋ชจ์ ์ ๊ท์ ์ฌ์ฉ

๋ค๋ฅธ ์ฌ๋๋ค์ ํ์ด๋ฅผ ํ์ธํ๋๋ฐ, ํน์ดํ๊ฒ ์ ๊ท์์ ์ฌ์ฉํด์ ํ์ด๋ฅผ ํ ๊ฒ์ ๋ณด์๋ค. ๋๋ ๋ฐ๋ผ์ ์ ๊ท์์ผ๋ก ๋ชจ์์ด ๋ช ๊ฐ์ธ์ง๋ฅผ ํ์ธํด๋ณด์๋ค.

1. s๋ฅผ a์ b๋ก ๋๋๋ค.
2. ๋ชจ์ ์ ๊ท์์ [aeiou]์ด๋ฉฐ, flag๋ global๊ณผ case insensitive๋ฅผ ๋ปํ๋ gi๋ก ํ๋ค.
   - case insensitive์ธ ์ด์ ๋ ๋๋ฌธ์์ธ ๋ชจ์๊ณผ ์๋ฌธ์์ธ ๋ชจ์ ๋ชจ๋๋ฅผ ๊ตฌํ๊ธฐ ์ํจ์ด๋ค.
3. a์ b ๊ฐ๊ฐ์ ๋ชจ์ ์ ๊ท์๊ณผ matchํ ํ, ๊ทธ ๊ธธ์ด๋ฅผ ๊ตฌํ๋ค. ๋ง์ฝ match๋๊ฒ ์์ผ๋ฉด, ๊ธธ์ด๋ฅผ 0์ผ๋ก ํ๋ค.
4. 3์์ ๊ตฌํ ๊ฐ์ด a์ b๊ฐ ๊ฐ์ผ๋ฉด true, ๋ค๋ฅด๋ฉด false๋ฅผ ๋ฐํํ๋ค.

### ๐ ์ ๊ทผ 2 - ์ฝ๋

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

### ๐งญ ๋ณต์ก๋

- ๊ณต๊ฐ ๋ณต์ก๋ : O(1)
- ์๊ฐ ๋ณต์ก๋ : O(N)

### ๐ง ์๊ฒ๋ ์ 

1. String.prototype.includes()๊ฐ ์กด์ฌํ๋ค.
   ๋ฌธ์๊ฐ ๋ชจ์์ธ์ง๋ฅผ ํ์ธํ  ๋, ๋ชจ์ ๋ฐฐ์ด์ ๋๊ณ  includes๋ฉ์๋๋ฅผ ์ฌ์ฉํ์๋ค.
   ๋ฐฐ์ด๋ง ๊ฐ๋ฅํ ๊ฒ์ด ์๋๋ผ, ์คํธ๋ง์๋ includes๋ฉ์๋๊ฐ ์์ด์, ์ด๋ฅผ ํ์ฉํ  ์ ์๋ค. ๋ฐ๋ผ์ ๋ฐฐ์ด๊ณผ ๋ฌธ์์ด ์ค ๋ ๊ด๋ฆฌํ๊ธฐ ์ฌ์ด ๊ฒ์ผ๋ก ์ ํํ๋ฉด ๋๋ ๊ฒ ๊ฐ๋ค.

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
