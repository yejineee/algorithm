# [LeetCode] Deepest Leaves Sum (in JS)

### 📖 문제

[Deepest Leaves Sum](https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/594/week-2-april-8th-april-14th/3704/)

![](https://assets.leetcode.com/uploads/2019/07/31/1483_ex1.png)

가장 깊은 레벨에 있는 노드의 값들을 더하여라.

### 💡 Fact

- 트리의 depth를 알아야 한다.
- 트리를 순회하면서 depth에 위치한 leaf node들의 값을 더해야 한다.
- 자식 노드의 level은 부모 노드의 level보다 1 크다.

### 🚎 접근

- root node의 레벨을 1로 하고, root노드부터, left, right node를 차례로 순회하면서 다음을 확인한다.
  - 현재 node의 level이 지금까지 알고 있던 depth보다 크다면, depth를 level로 바꾸고, sum을 현재 노드의 value로 초기화한다.
  - 현재 node의 level이 지금까지 알고 있던 depth와 같다면, sum에 현재 노드의 value를 더한다.
- 순회를 끝냈을 때의 sum을 반환한다.

### 🧭 복잡도

- 공간 복잡도 : O(N)
- 시간 복잡도 : O(N)

### 🧐 알게된 점

- 0은 boolean으로 false이므로, `while(queue.length)`만으로 queue 배열에 값이 있을 경우에만 반복문을 수행하도록 할 수 있다.
- 릿 코드의 주석에 있는 param을 꼭 확인하자...ㅠㅡㅠ

### 📝 코드

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
