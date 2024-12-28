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

    // It mainly works when the right child is not empty, which is  the case we need in BST deleteItem
    getSuccessor(curr) {
        curr = curr.right;

        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }

        return curr;
    }

    deleteItem(value, currNode = this.root) {
        // Base case
        if (currNode === null) {
            return currNode;
        }

        // If data to be searched is in a subtree
        if (currNode.data > value) {
            currNode.left = this.deleteItem(value, currNode.left);
        } else if (currNode.data < value) {
            currNode.right = this.deleteItem(value, currNode.right);
        } else {
            // If currNode matches with the given value

            // Cases when currNode has 0 children or only right child
            if (currNode.left === null) {
                return currNode.right;
            }

            // When currNode has only left child
            if (currNode.right === null) {
                return currNode.left;
            }

            // When both children are present
            let succ = this.getSuccessor(currNode);

            currNode.data = succ.data;
            currNode.right = this.deleteItem(succ.data, currNode.right);
        }

        return currNode;
    }
}

export default Tree;
