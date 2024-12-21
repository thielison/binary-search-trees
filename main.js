import { buildTree, insert } from "./binary-search-trees.js";
import prettyPrintTree from "./pretty-print-tree.js";

// Test array
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// Turns the test array in a balanced binary tree (BST)
const balancedSearchTree = buildTree(arr);
// prettyPrintTree(balancedSearchTree);

// Insert additional values into the initially balanced BST.
// These insertions use standard BST logic and do not rebalance the tree,
// so the structure may become progressively less balanced as you add values.
insert(balancedSearchTree, 2);
insert(balancedSearchTree, 6);
insert(balancedSearchTree, 10);
insert(balancedSearchTree, 1234);

// Print the BST
prettyPrintTree(balancedSearchTree);
