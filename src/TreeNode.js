class TreeNode {
  constructor(id, name, parents, spouses, children, customAttributes = {}) {
    this.id = id;
    this.name = name;
    this.parents = parents;
    this.spouses = spouses;
    this.children = children;
    this.customAttributes = customAttributes;
  }
}

module.exports = TreeNode;