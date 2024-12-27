import sortWithoutDuplicates from "./unique-merge-sort.js";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        // Sort the input array and remove duplicates
        const uniqueSortedArray = sortWithoutDuplicates(array);

        this.root = this.buildTree(uniqueSortedArray, 0, uniqueSortedArray.length - 1);
    }

    // Takes an array of data and turns it into a balanced binary tree full of Node objects appropriately placed
    buildTree(arr, start, end) {
        if (start > end) {
            return null;
        }

        // Find the middle element
        const mid = Math.floor((start + end) / 2);

        // Create root node
        const root = new Node(arr[mid]);

        // Create left subtree
        root.left = this.buildTree(arr, start, mid - 1);

        // Create right subtree
        root.right = this.buildTree(arr, mid + 1, end);

        return root;
    }

    // Inserts a new node with the given value into the BST.
    insert(value, currNode = this.root) {
        // If we’ve reached a null spot (no node here), create a new node and return it.
        // This is where the new value gets added to the tree.
        if (currNode === null) {
            return new Node(value);
        }

        // Prevent inserting duplicates: if this node already holds the value,
        // just return it without adding anything.
        if (value === currNode.data) {
            return currNode;
        }

        // If the value is smaller, recurse into the left subtree.
        if (value < currNode.data) {
            currNode.left = this.insert(value, currNode.left);
        }
        // Otherwise, if the value is larger, recurse into the right subtree.
        else if (value > currNode.data) {
            currNode.right = this.insert(value, currNode.right);
        }

        // Finally, return the (possibly unchanged) current node
        // so that it’s properly linked upward in the tree.
        return currNode;
    }
}

export { Tree };
