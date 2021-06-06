/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function (head, k) {
  if (k === 0 || head === null) {
    return head;
  }
  let len = 1;
  let tail = head;
  while (tail.next !== null) {
    len += 1;
    tail = tail.next;
  }
  const rotate = k % len;
  if (rotate === 0) {
    return head;
  }
  let newTail = head;
  let nFront = len - rotate - 1;
  while (nFront--) {
    newTail = newTail.next;
  }
  const newHead = newTail.next;
  newTail.next = null;
  tail.next = head;
  return newHead;
};
