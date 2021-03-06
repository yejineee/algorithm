# [LeetCode] Deepest Leaves Sum (in JS)

### ๐ ๋ฌธ์ 

[Deepest Leaves Sum](https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/594/week-2-april-8th-april-14th/3704/)

![](https://assets.leetcode.com/uploads/2019/07/31/1483_ex1.png)

๊ฐ์ฅ ๊น์ ๋ ๋ฒจ์ ์๋ ๋ธ๋์ ๊ฐ๋ค์ ๋ํ์ฌ๋ผ.

### ๐ก Fact

- ํธ๋ฆฌ์ depth๋ฅผ ์์์ผ ํ๋ค.
- ํธ๋ฆฌ๋ฅผ ์ํํ๋ฉด์ depth์ ์์นํ leaf node๋ค์ ๊ฐ์ ๋ํด์ผ ํ๋ค.
- ์์ ๋ธ๋์ level์ ๋ถ๋ชจ ๋ธ๋์ level๋ณด๋ค 1 ํฌ๋ค.

### ๐ ์ ๊ทผ

- root node์ ๋ ๋ฒจ์ 1๋ก ํ๊ณ , root๋ธ๋๋ถํฐ, left, right node๋ฅผ ์ฐจ๋ก๋ก ์ํํ๋ฉด์ ๋ค์์ ํ์ธํ๋ค.
  - ํ์ฌ node์ level์ด ์ง๊ธ๊น์ง ์๊ณ  ์๋ depth๋ณด๋ค ํฌ๋ค๋ฉด, depth๋ฅผ level๋ก ๋ฐ๊พธ๊ณ , sum์ ํ์ฌ ๋ธ๋์ value๋ก ์ด๊ธฐํํ๋ค.
  - ํ์ฌ node์ level์ด ์ง๊ธ๊น์ง ์๊ณ  ์๋ depth์ ๊ฐ๋ค๋ฉด, sum์ ํ์ฌ ๋ธ๋์ value๋ฅผ ๋ํ๋ค.
- ์ํ๋ฅผ ๋๋์ ๋์ sum์ ๋ฐํํ๋ค.

### ๐งญ ๋ณต์ก๋

- ๊ณต๊ฐ ๋ณต์ก๋ : O(N)
- ์๊ฐ ๋ณต์ก๋ : O(N)

### ๐ง ์๊ฒ๋ ์ 

- 0์ boolean์ผ๋ก false์ด๋ฏ๋ก, `while(queue.length)`๋ง์ผ๋ก queue ๋ฐฐ์ด์ ๊ฐ์ด ์์ ๊ฒฝ์ฐ์๋ง ๋ฐ๋ณต๋ฌธ์ ์ํํ๋๋ก ํ  ์ ์๋ค.
- ๋ฆฟ ์ฝ๋์ ์ฃผ์์ ์๋ param์ ๊ผญ ํ์ธํ์...ใ ใกใ 

### ๐ ์ฝ๋

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const deepestLeavesSum = function (root) {
  const queue = [{ level: 1, node: root }];
  let depth = 0;
  let sumOfLeaves = 0;
  while (queue.length) {
    const { node, level } = queue.pop();
    if (depth < level) {
      depth = level;
      sumOfLeaves = node.val;
    } else if (level === depth) {
      sumOfLeaves += node.val;
    }
    if (node.left) queue.push({ level: level + 1, node: node.left });
    if (node.right) queue.push({ level: level + 1, node: node.right });
  }

  return sumOfLeaves;
};
```
