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
