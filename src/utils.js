
function validateNodeData(node){

  if (!node.id || typeof node.id !== 'number'){
    throw new Error("Each node must have a unique numeric ID.");
  }
  if (!node.name || typeof node.name !== 'string'){
    throw new Error("Each node must have a name.");
  }


  if (!node.id || !node.name) throw new Error("Node must have an ID and name.");
  // Add more validations as necessary
}

module.exports = { validateNodeData };