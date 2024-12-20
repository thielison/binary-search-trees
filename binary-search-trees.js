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

// Utility function to insert a new node with the given value
const insert = (root, value) => {
    if (root === null) {
        return new Node(value);
    }

    // Duplicates not allowed
    if (root.data === value) {
        return root;
    }

    if (value < root.data) {
        root.left = insert(root.left, value);
    } else if (value > root.data) {
        root.right = insert(root.right, value);
    }

    return root;
};

const buildTree = (arr) => {
    // Sort the input array and remove duplicates
    const uniqueSortedArray = sortWithoutDuplicates(arr);

    // Takes an array of data and turns it into a balanced binary tree full of Node objects appropriately placed
    const balancedSearchTree = tree(uniqueSortedArray, 0, uniqueSortedArray.length - 1);

    return balancedSearchTree;
};

export { buildTree, insert };
