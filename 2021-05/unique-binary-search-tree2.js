/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

const tree = [];

const buildTreeOfMaxN = (n, maxN) => {
  if (n === 0) {
    return [null];
  }
  if (tree[n]) {
    return tree[n];
  }
  const leftN = n - 1;
  const rightN = maxN - n;

  const leftSide = buildTreeOfMaxN(leftN, maxN);
  const rightSide = buildTreeOfMaxN(rightN, maxN).map((v) =>
    v === null ? v : v + n
  );
  const result = [...leftSide, n, ...rightSide];
  if (result[0] === null) {
    result.shift();
  }
  if (result[result.length - 1] === null) {
    result.pop();
  }
  tree[n] = result;
  return result;
};
const generateTrees = function (n) {
  const result = [];
  for (let root = 1; root <= n; root += 1) {
    console.log(`${root}---------`);
    result.push(buildTreeOfMaxN(root, n));
  }
  return result;
};

console.log(generateTrees(2));
