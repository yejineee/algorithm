class MinHeap {
  constructor() {
    this.heap = [];
    this.n = 0;
  }
  isEmpty() {
    return !this.n;
  }
  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.heap[1];
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const root = this.heap[1];
    const last = heap[this.n--];
    let parent = 1;
    let child = 2;
    while (child <= this.n) {
      if (child < this.n && heap[child] > heap[child + 1]) {
        child++;
      }
      if (last > heap[child]) {
        heap[parent] = heap[child];
        parent = child;
        child *= 2;
      }
    }
    heap[parent] = last;
    return root;
  }
  push(item) {
    this.n += 1;
    let i = this.n;
    while (i !== 1 && heap[Math.ceil(i / 2)] > item) {
      heap[i] = heap[Math.ceil(i / 2)];
      i /= 2;
    }
    heap[i] = item;
  }
}

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  const minHeap = new minHeap();
};
