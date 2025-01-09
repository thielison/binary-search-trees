import sortWithoutDuplicates from "./unique-merge-sort.js";

let nodeHeight = -1;

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

    // Find a node with a given value in the tree
    find(value, currNode = this.root) {
        // If null node was reached, the value isn't in the tree
        if (currNode === null) {
            return null;
        }

        // If the current node’s data matches the value, we found our node
        if (value === currNode.data) {
            console.log(`Node with value ${value} was found:`);
            console.log(currNode);

            return currNode;
        }

        // Traverse the BST
        // If the value is smaller, look in the left subtree, otherwise go right
        if (value < currNode.data) {
            return this.find(value, currNode.left);
        } else {
            return this.find(value, currNode.right);
        }
    }

    // BREADTH-FIRST SEARCH
    // Traverse the tree in Level Order using iteration
    levelOrder(callback) {
        // Throws error if no callback is passed
        if (!callback) {
            throw new Error("A callback function is required!");
        }

        // If the tree is empty, return null
        if (!this.root) {
            return null;
        }

        // Initialize the queue with the root node
        const queue = [this.root];

        // Traverse the tree level by level
        while (queue.length > 0) {
            // Dequeue the first node in the queue and returns it
            let currNode = queue.shift();

            // Process the current node using the callback function
            callback(currNode);

            // Enqueue the left child if it exists
            if (currNode.left !== null) {
                queue.push(currNode.left);
            }

            // Enqueue the right child if it exists
            if (currNode.right !== null) {
                queue.push(currNode.right);
            }
        }
    }

    // DEPTH-FIRST SEARCH
    // Traverse the tree in Pre Order, In Order and Post Order
    preOrder(callback, currNode = this.root) {
        // Ensure a callback function is provided
        if (!callback) {
            throw new Error("A callback function is required!");
        }

        // Base case: if the current node is null, stop recursion
        if (currNode === null) {
            return;
        }

        // Process the current node
        callback(currNode);

        // Recur on the left subtree
        this.preOrder(callback, currNode.left);

        // Recur on the right subtree
        this.preOrder(callback, currNode.right);
    }

    inOrder(callback, currNode = this.root) {
        // Ensure a callback function is provided
        if (!callback) {
            throw new Error("A callback function is required!");
        }

        // Base case: if the current node is null, stop recursion
        if (currNode === null) {
            return;
        }

        // Recur on the left subtree
        this.inOrder(callback, currNode.left);

        // Process the current node
        callback(currNode);

        // Recur on the right subtree
        this.inOrder(callback, currNode.right);
    }

    postOrder(callback, currNode = this.root) {
        // Ensure a callback function is provided
        if (!callback) {
            throw new Error("A callback function is required!");
        }

        // Base case: if the current node is null, stop recursion
        if (currNode === null) {
            return;
        }

        // Recur on the left subtree
        this.postOrder(callback, currNode.left);

        // Recur on the right subtree
        this.postOrder(callback, currNode.right);

        // Process the current node
        callback(currNode);
    }

    // Print node data
    printNodeData(node) {
        console.log(node.data);
    }

    // Helper function to height(node)
    // Updates global variable "nodeHeight"
    heightUtil(node, root = this.root) {
        // Base Case
        if (root == null) {
            return -1;
        }

        // Store the maximum height of
        // the left and right subtree
        let leftHeight = this.heightUtil(node, root.left);

        let rightHeight = this.heightUtil(node, root.right);

        // Update height of the current node
        let answer = Math.max(leftHeight, rightHeight) + 1;

        // If current node is the required node
        if (root.data == node) {
            // Update global variable
            nodeHeight = answer;
        }

        return answer;
    }

    // Returns the given node’s height using heightUtil function
    // Height of a specific node is the distance from the node down to the deepest leaf
    height(node) {
        this.heightUtil(node);

        return nodeHeight;
    }

    // Returns the given node’s depth
    // Depth is defined as the number of edges in the path from a given node to the tree’s root node
    depth(node, root = this.root, depth = 0) {
        if (root === null) {
            return -1; // Node not found
        }

        // If the current node's value matches the target, return the current depth
        if (root.data === node) {
            return depth; // Found the node, return its depth
        }

        // Recursively search for the node in the left subtree
        const leftDepth = this.depth(node, root.left, depth + 1);

        // If the node is found in the left subtree, return its depth
        if (leftDepth !== -1) {
            return leftDepth; // Found in left subtree
        }

        // Otherwise, recursively search for the node in the right subtree
        return this.depth(node, root.right, depth + 1);
    }
}

export default Tree;
