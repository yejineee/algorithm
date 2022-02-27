# [LeetCode] Number of Provinces (in JS)

LeetCode의 disjoint set을 배우는 곳에서, quick find와 quick union을 배우기 전에 
직접 문제를 해결해보았다.

### 📖 문제
- https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3845/

NxN 매트릭스인 isConnected 배열이 주어진다.
isConnected[i][j]가 1이면 i번째 도시와 j번째 도시는 연결되어있다.

연결된 도시끼리는 주를 이룬다. 주의 갯수를 구하여라

### 💡 Fact
- isConnected[i][j]는 isConnected[j][i]와 같고, isConnected[i][i]는 항상 1이다.
  - 따라서 row는 [0, N)과 column은 [row+1, N)을 탐색하면 전체를 탐색하는 것이다.
- isConnected[i][i]는 1이므로, 각 도시의 초기 root값은 자기 자신이다.
- 두 도시가 연결되어있고, 두 도시의 root가 다르면, 아무거나 한 도시의 root를 다른 도시의 root로 지정하여 합친다. 
  - 이 때, root가 변경될 도시와 같은 root를 공유하고 있던 다른 도시들도 변경될 root로 root가 바뀐다.


### 🚎 접근
- 초기에 각 도시의 root는 자기 자신이므로 도시의 root를 저장하는 root 배열을 자기 자신으로 초기화한다.
- rootMap의 초기값은 root가 key, value는 [root]이다. 
-  row는 [0, N)과 column은 [row+1, N)을 순회하며 다음을 확인한다.
   -  두 도시 u, v가 연결되어있고, u와 v의 루트가 다르면
      -  u의 루트를 v의 루트로 설정한다.
      -  v의 루트를 자신의 루트로 설정한 다른 도시들의 루트도 u로 설정한다.
      -  rootMap에서 v의 루트를 제거한다.
-  rootMap의 key의 갯수가 주의 갯수이다.

### 🧭 복잡도

- 공간 복잡도 : O(N)
- 시간 복잡도 : O(N^3)

### 📝 코드

```javascript
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

```
