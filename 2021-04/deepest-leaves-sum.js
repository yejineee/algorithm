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
  let depth = 0;
  const findDepth = (node, level) => {
    depth = Math.max(level, depth);
    if (node.left) {
      findDepth(node.left, level + 1);
    }
    if (node.right) {
      findDepth(node.right, level + 1);
    }
  };
  findDepth(root, 1);

  const queue = [{ level: 1, node: root }];
  let sumOfLeaves = 0;
  while (queue.length) {
    const { node, level } = queue.pop();
    if (level === depth) {
      sumOfLeaves += node.val;
    }
    if (node.left) queue.push({ level: level + 1, node: node.left });
    if (node.right) queue.push({ level: level + 1, node: node.right });
  }

  return sumOfLeaves;
};
