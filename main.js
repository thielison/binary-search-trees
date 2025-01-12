import Tree from "./binary-search-trees.js";
import prettyPrintTree from "./pretty-print-tree.js";

// Test array
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// Turns the test array in a balanced binary tree (BST)
let tree = new Tree(arr);

console.log("");
console.log("***BALANCED BINARY SEARCH TREE***");
prettyPrintTree(tree.root);

// Insert additional values into the initially balanced BST.
// These insertions use standard BST logic and do not rebalance the tree,
// so the structure may become progressively less balanced as you add values.
tree.insert(2);
tree.insert(6);
tree.insert(10);
tree.insert(11);
tree.insert(1234);

console.log("");
console.log("***INSERTION OF NODES***");
prettyPrintTree(tree.root);

// Delete a node from the tree
tree.deleteItem(8);
tree.deleteItem(1234);

console.log("");
console.log("***DELETION OF A NODE***");
// Print the BST
prettyPrintTree(tree.root);

console.log("");
console.log("***FIND NODE IN THE TREE***");
// Find a specific node in the tree
tree.find(2);

console.log("");
console.log("***PRINT TREE IN LEVEL ORDER (BREADTH-FIRST SEARCH***)");
const levelOrderArr = tree.toArray("levelOrder");
console.log(levelOrderArr);

console.log("");
console.log("***PRINT TREE IN PRE ORDER (DEPTH-FIRST SEARCH***)");

const preOrderArray = tree.toArray("preOrder");
console.log(preOrderArray);

console.log("");
console.log("***PRINT TREE IN ORDER (DEPTH-FIRST SEARCH***)");
const inOrderArray = tree.toArray("inOrder");
console.log(inOrderArray);

console.log("");
console.log("***PRINT TREE IN POST ORDER (DEPTH-FIRST SEARCH***)");
const postOrderArray = tree.toArray("postOrder");
console.log(postOrderArray);

console.log("");
console.log("***PRINT HEIGHT AND DEPTH OF A NODE***");
console.log("Node's height: " + tree.height(67));
console.log("Node's depth: " + tree.depth(6345));

console.log("");
console.log("***CHECK IF TREE IS BALANCED***");
console.log(tree.isBalanced());

console.log("");
console.log("***REBALANCE TREE***");
console.log(tree.rebalance());
prettyPrintTree(tree.root);
