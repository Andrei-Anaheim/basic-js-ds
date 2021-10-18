const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.list = null;
  }


  getUnderlyingList() {
    console.log(this.list);
    return this.list;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if(this.list) {
      let prev = this.list;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    } else {
      this.list = node;
    }
  }

  dequeue() {
    let info = this.list.value;
    this.list = this.list.next;
    console.log(info, this.list);
    return info;
  }

}
