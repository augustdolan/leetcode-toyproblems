var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  let maxDepth = 0;
  const recursion = (currentRoot, currentDepth = 0) => {
    currentDepth++
    if (currentRoot.left === null && currentRoot.right === null) {
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }
    } else {
      if (currentRoot.left !== null) {
        recursion(currentRoot.left, currentDepth);
      }
      if (currentRoot.right !== null) {
        recursion(currentRoot.right, currentDepth);
      }
    }
  }
  recursion(root);
  return maxDepth;
};