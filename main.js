import { buildTree } from "./binary-search-trees.js";
import prettyPrintTree from "./pretty-print-tree.js";

// Test array
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

// Turns the test array in a balanced binary tree (BST)
const balancedSearchTree = buildTree(arr);

// Print the BST
prettyPrintTree(balancedSearchTree);
