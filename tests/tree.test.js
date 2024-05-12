const { experiments } = require('webpack');
const Tree = require('../src/Tree');

describe('Tree', () => { 
  let tree;

  beforeEach(() => {
    tree = new Tree();
  });

  test('addNode should add  a node', () => {
    tree.addNode({ id:1, name: 'Sandesh', parents: [], spouse: [], children: [] });
    expect(tree.getNode(1).name).toBe('Sandesh');
  });

  test('should not add node with duplicate id', () => {
    tree.addNode({ id:1, name: 'Sandesh', parents: [], spouse: [], children: [] });
    let addBadNode = () => tree.addNode({ id:1, name: 'Prem', parents: [], spouse: [], children: [] });
    expect(addBadNode).toThrow(Error);
  })

  test('removeNode should remove a node', () => {
    tree.addNode({ id:1, name:'Sandesh', parents:[], spouse:[], children: []});
    tree.removeNode(1);
    expect(tree.getNode(1)).toBeNull();
  });

  test('updateNode should update node details, ()', () => {
    tree.addNode({ id:1, name:'Sandesh', parents:[], spouse:[], children: []});
    tree.updateNode(1, { name: 'Prem' });
    expect(tree.getNode(1).name).toBe('Prem');
  });

 });