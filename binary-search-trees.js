import sortWithoutDuplicates from "./unique-merge-sort.js";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const tree = (arr, start, end) => {
    if (start > end) {
        return null;
    }

    // Find the middle element
    const mid = Math.floor((start + end) / 2);

    // Create root node
    const root = new Node(arr[mid]);

    // Create left subtree
    root.left = tree(arr, start, mid - 1);

    // Create right subtree
    root.right = tree(arr, mid + 1, end);

    return root;
};

const buildTree = (arr) => {
    // Sort the input array and remove duplicates
    const uniqueSortedArray = sortWithoutDuplicates(arr);

    // Takes an array of data and turns it into a balanced binary tree full of Node objects appropriately placed
    const balancedSearchTree = tree(uniqueSortedArray, 0, uniqueSortedArray.length - 1);

    return balancedSearchTree;
};

// Utility function to insert a new node with the given value into the binary search tree
const insert = (root, value) => {
    // Base case: If the root is null, create a new node with the value and return it
    if (root === null) {
        return new Node(value);
    }

    // Prevent insertion of duplicate values into the binary search tree
    if (root.data === value) {
        return root; // If the value already exists, do nothing and return the current node
    }

    // If the value is smaller than the current node's data, recursively insert it into the left subtree
    // The insertion will occur when the function encounters a null left child (leaf node)
    if (value < root.data) {
        root.left = insert(root.left, value);
    }
    // If the value is greater than the current node's data, recursively insert it into the right subtree
    // The insertion will occur when the function encounters a null left child (leaf node)
    else if (value > root.data) {
        root.right = insert(root.right, value);
    }

    // Return the root node after the insertion is complete
    return root;
};

export { buildTree, insert };
