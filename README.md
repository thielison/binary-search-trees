# Binary Search Trees Interactive Program

This project is an interactive console application that implements a **Binary Search Tree (BST)** in JavaScript. It allows users to create and manipulate binary search trees, explore their properties, and perform common operations interactively. The application is based on the [Binary Search Trees lesson](https://www.theodinproject.com/lessons/javascript-binary-search-trees) from The Odin Project curriculum.

## Features

### Core Functionality

-   **Create a Binary Search Tree**: Generate a balanced BST from an array of random integers less than 100.
-   **Insertion**: Add a new value to the BST while maintaining its properties.
-   **Deletion**: Remove a value from the BST.
-   **Search**: Locate a specific value in the tree.
-   **Traversal**: Explore the tree using:
    -   Level-order (Breadth-first search)
    -   Pre-order
    -   Post-order
    -   In-order (Depth-first searches)

### Utility Functions

-   **Tree Properties**:
    -   Check if the tree is balanced.
    -   Calculate the height of a node (distance from the node to the deepest leaf).
    -   Calculate the depth of a node (distance from the node to the root).
-   **Rebalancing**: Transform an unbalanced tree into a balanced one.
-   **Pretty Print**: Display the tree in a structured format.

### Interactive Menu

Navigate through the features using a console-based menu for a seamless user experience.

## File Overview

#### `main.js`

The entry point of the application. It manages the user interface, handles input, and invokes appropriate methods on the BST.

#### `binary-search-trees.js`

Contains the implementation of the **Tree** and **Node** classes:

-   **Node Class**: Represents a single node in the BST.
-   **Tree Class**: Provides methods for creating and managing a BST, including insertion, deletion, traversal, and balancing.

#### `pretty-print-tree.js`

A utility function for visually displaying the BST in the console.

#### `unique-merge-sort.js`

Implements a merge sort algorithm that removes duplicates while sorting an array. Used to initialize the BST with a sorted array of unique values.

## How to Run

1. Clone this repository:
    ```bash
    git clone <git@github.com:thielison/binary-search-trees.git>
    cd <repository-directory>
    ```
2. Install dependencies:

    ```
    node main.js
    ```

3. Start the application:

    ```
    node main.js
    ```

4. Follow the prompts in the console to explore the application.

### Menu Options

1. Create a binary search tree from an array of random numbers < 100
2. Insert value into the tree
3. Delete a given value from the tree
4. Find value in the tree
5. Find height of a node
6. Find depth of a node
7. Pretty print complete tree
8. Check if the tree is balanced
9. Print elements of the tree in level-order traversal
10. Print elements of the tree in pre-order traversal
11. Print elements of the tree in post-order traversal
12. Print elements of the tree in in-order traversal
13. Unbalance the tree by adding numbers > 100
14. Rebalance the tree

### Learning Objectives

-   Understand and implement the Binary Search Tree (BST) data structure.
-   Learn about tree traversals (in-order, pre-order, post-order, and level-order).
-   Explore algorithms for maintaining and rebalancing BSTs.
-   Gain experience with interactive console applications in JavaScript.
