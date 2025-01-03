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

    // Finds and returns the in-order successor (the smallest node in the right subtree).
    // It mainly works when the right child is not empty, which is the case we need in BST deleteItem
    getSuccessor(curr) {
        // Move to the right subtree once
        curr = curr.right;

        // Go left until there are no more left children
        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }

        // Return the in-order successor (leftmost node in the right subtree)
        return curr;
    }

    // Delete a node with the given value from the BST
    deleteItem(value, currNode = this.root) {
        // 1. Base case: If currNode is null, it simply returns null because there’s nothing to delete
        if (currNode === null) {
            return currNode;
        }

        // 2. Traverse down the tree to find the node to delete
        if (value < currNode.data) {
            // The value is in the left subtree
            currNode.left = this.deleteItem(value, currNode.left);
        } else if (value > currNode.data) {
            // The value is in the right subtree
            currNode.right = this.deleteItem(value, currNode.right);
        } else {
            // 3. When value === currNode.data, we’ve found the node that needs deletion

            // a. Node with 0 child = no children at all (a left node) OR node with only 1 child (left or right):
            //    (1) No left child => replace with the right child (may be null or actual node)
            if (currNode.left === null) {
                return currNode.right;
            }

            //    (2) No right child => replace with the left child (may be null or actual node)
            if (currNode.right === null) {
                return currNode.left;
            }

            // b. Node with two children (left and right nodes):
            //    (1) Find its in-order successor (node with the smallest value in its right subtree)
            let succ = this.getSuccessor(currNode);

            //    (2) Copy the successor’s data into the current node
            currNode.data = succ.data;

            //    (3) Recursively delete the successor from the right subtree
            //        (because we've effectively moved that data up)
            currNode.right = this.deleteItem(succ.data, currNode.right);
        }

        // 4. Return the (potentially updated) current node to link it back up the chain
        return currNode;
    }

    find(value) {}
}

export default Tree;
