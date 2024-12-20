import mergeSort from "./merge-sort.js";

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
    // Sort the input array
    // mergeSort here will do the same as "arr.sort((a, b) => a - b)"
    const sortedArray = mergeSort(arr);

    // Remove duplicates to get a unique, sorted array
    const uniqueSortedArray = [...new Set(sortedArray)];

    return tree(uniqueSortedArray, 0, uniqueSortedArray.length - 1);
};

// console.log the tree in a structured format.
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }

    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);

    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const bstRoot = buildTree(arr);
prettyPrint(bstRoot);
