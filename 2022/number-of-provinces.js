/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const root = new Array(n).fill().map((_, i) => i);
  const rootMap = new Map(root.map((rootNode) => [rootNode, [rootNode]]));

  for (let r = 0; r < n; r += 1) {
    for (let c = r + 1; c < n; c += 1) {
      if (isConnected[r][c] && root[r] !== root[c]) {
        const rootNode = root[r];
        const prevRootNode = root[c];
        rootMap.set(rootNode, [
          ...rootMap.get(rootNode),
          ...rootMap.get(prevRootNode),
        ]);
        rootMap.get(prevRootNode).forEach((node) => {
          root[node] = rootNode;
        });
        rootMap.delete(prevRootNode);
      }
    }
  }
  return rootMap.size;
};
