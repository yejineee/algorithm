/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

const MAX_N = 2 * 10 ** 4;

const adj = new Array(MAX_N).fill().map(() => []);
const visit = new Array(MAX_N);

const buildAdjList = (edges) => {
  edges.forEach(([a, b]) => {
    adj[a].push(b);
    adj[b].push(a);
  });
};

const getHeight = (v) => {
  let height = 0;
  const nAdjNode = adj[v].length;
  visit[v] = true;
  // console.log(`${v} ->`);
  for (let i = 0; i < nAdjNode; i += 1) {
    const adjNode = adj[v][i];
    if (!visit[adjNode]) {
      const heightOfAdjNode = getHeight(adjNode);
      height = Math.max(height, heightOfAdjNode + 1);
    }
  }
  return height;
};

const findMinHeightTrees = function (n, edges) {
  buildAdjList(edges);
  let minHeight = n - 1;
  let minHeightRoots = [];
  for (let root = 0; root < n; root += 1) {
    visit.fill(false, 0, n);
    const height = getHeight(root);
    if (height < minHeight) {
      minHeight = height;
      minHeightRoots = [root];
    } else if (height === minHeight) {
      minHeightRoots.push(root);
    }
    // console.log(`root : ${root}====`);
    // console.log(minHeightRoots);
    // console.log(minHeight);
  }
  console.log(minHeightRoots);
  return minHeightRoots;
};
findMinHeightTrees(6, [
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 4],
  [5, 4],
]);
