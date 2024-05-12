const TreeNode = require('./TreeNode');
const utils = require('./utils');

class Tree {
  constructor() {
    this.nodes = {} // Storing nodes by ID for quick access
  }

  addNode(data){
    if(this.getNode(data.id)) {
      throw new Error(`A node with ID ${data.id} already exists.`);
    }
    utils.validateNodeData(data);
    const newNode = new TreeNode(data.id, data.name, 
                                data.parents, data.spouses, data.children,
                                data.customAttributes);
    this.nodes[data.id] = newNode;
    return newNode;
  }

  getNode(id) {
    return this.nodes[id] || null;
  }

  removeNode(id){
    const nodeToRemove = this.nodes[id];
    if (!nodeToRemove) return false;

    // Remove the node from its parents' and children's lists
    nodeToRemove.parents.forEach(parentId => {
      const parent = this.nodes[parentId];
      if (parent) {
        parent.children = parent.children.filter(childId => childId !== id);
      }
    });

    nodeToRemove.children.forEach(childId => {
      const child = this.nodes[childId];
      if (child){
        child.parents = child.parents.filter(parentId => parentId !== id);
      }
    });

    delete this.nodes[id];  // Remove the node from the tree
    return true;
  }

  updateNode(id, newData) {
    const node = this.getNode(id);
    if (!node) return null;
    utils.validateNodeData({...node, ...newData}); // Validate updated data

    // Update node properties
    Object.keys(newData).forEach(key => {
      node[key] = newData[key];
    });
    return node;
  }
}

module.exports = Tree;