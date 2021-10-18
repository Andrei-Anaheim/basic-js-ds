const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }


  add(data) {
    let node = new Node(data);
    if (this.rootNode) {
      let currentNode = this.rootNode;
      while (currentNode) {
        if(data > currentNode.data) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = node;
            break;
          }
        } else {
          if(currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = node;
            break;
          }
        }
      }
    } else {
      this.rootNode = node;
    }
  }

  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
    let node = this.root();
    while (node) {
      if(data > node.data) {
        node = node.right;
      } else if (data < node.data) {
        node = node.left;
      } else {
        break;
      }
    }
    return node;
  }

  remove(/* data */) {
  }

  min() {
    let node = this.root();
    while (node.left) {
      node = node.left;
    }
    if (node) {
      return node.data
    } else {
      return null
    }
  }

  max() {
    let node = this.root();
    while (node.right) {
      node = node.right;
    }
    if (node) {
      return node.data
    } else {
      return null
    }
  }

}