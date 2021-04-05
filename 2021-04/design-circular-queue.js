/**
 * @param {number} k
 */

const MyCircularQueue = function (k) {
  this.queue = [];
  this.maxSize = k + 1;
  this.rear = 0;
  this.front = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */

MyCircularQueue.prototype.nextPos = function (pos) {
  return (pos + 1) % this.maxSize;
};

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.rear = this.nextPos(this.rear);
  this.queue[this.rear] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.front = this.nextPos(this.front);
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.nextPos(this.front)];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.rear === this.front;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.nextPos(this.rear) === this.front;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
