# [LeetCode] 1448. Count Good Nodes in Binary Tree (in JS)

### 📖 문제

[1448. Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/)

  바이너리 트리에서 node까지의 path 중 모든 노드의 값이 그 node의 값 보다 크지 않다면, 그 노드를 good이라고 한다. 주어진 바이너리 트리에서 good node의 수를 구하여라
  
### 💡 Fact

- path 중 가장 큰 값이 방문한 노드의 값보다 작거나 같다면, 그 노드는 good이다.
- Path 중 가장 큰 값을 구하기 위해 dfs로 traverse한다.

### 🚎 접근
- binary tree를 dfs로 방문한다.
- 첫 시작은 root이고, root부터 root까지의 Path중 가장 큰 값은 root 자신이므로, maxValueOfPath는 root value이다.
- maxValueOfPath가 자기 자신보다 작거나 같으면 자신은 good node이므로, 카운트를 증가시킨다.
- left child, right child를 방문하는데, maxValueOfPath를 갱신한다.


### 🧭 복잡도

- 공간 복잡도 :
- 시간 복잡도 : O(V+E)

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

const goodNodes = function (root) {
  let result = 0;
  const traverse = (node, maxValueOfPath) => {
    if (!node) {
      return;
    }
    if (node.val >= maxValueOfPath) {
      result += 1;
    }
    traverse(node.left, Math.max(node.val, maxValueOfPath));
    traverse(node.right, Math.max(node.val, maxValueOfPath));
  };
  traverse(root, root.val);
  return result;
};

```
