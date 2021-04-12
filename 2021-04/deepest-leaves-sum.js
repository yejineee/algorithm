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
