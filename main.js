import Tree from "./binary-search-trees.js";
import prettyPrintTree from "./pretty-print-tree.js";

// Test array
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// Turns the test array in a balanced binary tree (BST)
let tree = new Tree(arr);
// prettyPrintTree(tree.root);

// Insert additional values into the initially balanced BST.
// These insertions use standard BST logic and do not rebalance the tree,
// so the structure may become progressively less balanced as you add values.
tree.insert(2);
tree.insert(6);
tree.insert(10);
tree.insert(11);
tree.insert(1234);

console.log("***BEFORE DELETION OF A NODE***");
prettyPrintTree(tree.root);

// Delete a node from the tree
tree.deleteItem(8);

console.log("***AFTER DELETION OF A NODE***");
// Print the BST
prettyPrintTree(tree.root);

// Find a specific node in the tree
tree.find(2);
