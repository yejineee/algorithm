# [LeetCode] Swap Nodes in Pairs (in JS)

### 📖 문제

[swap-nodes-in-pairs](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

### 🚎 접근
**Recursion**으로 접근.
- Base Case: 첫 번째나 두 번째 노드가 null이면, 첫 번째 노드를 리턴한다.
- Recurrence Relation
  - 함수 자기 자신을 두 번째 노드의 다음을 head로 하여 호출한 리턴값을 저장한다.
  - 첫 번째 노드의 다음은 바로 위에서 얻은 head이다.
  - 두 번째 노드의 다음은 첫 번째 노드이다.

### 🧭 복잡도

- 공간 복잡도 : O(1)
- 시간 복잡도 : ???

### 🧐 알게된 점
- 노드를 바꾸려면 next를 바꿔줘야 한다. 노드의 값만 바꾸면, next는 바꾸지 않아도 된다.
- linked list의 count가 홀수 일 수 있다. 첫 번째 노드가 있지만, 두 번째 노드가 없을 수 있으므로 이 점을 염두하고 처리해야 한다.

### 📝 코드

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  const first = head;
  const second = head.next;

  first.next = swapPairs(second.next);
  second.next = first;

  return second;
};
```
