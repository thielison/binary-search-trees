import Tree from "./binary-search-trees.js";
import prettyPrintTree from "./pretty-print-tree.js";
import readline from "readline";

let tree = null; // Initialize the tree as null to start

// Create an interface for reading input in the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to display the main menu
const displayMenu = () => {
    console.log("\n\nWhat do you want to do?");
    console.log("1 - Create a binary search tree from an array of random numbers < 100");
    console.log("2 - Insert value into the tree");
    console.log("3 - Delete a given value from the tree");
    console.log("4 - Find value in the tree");
    console.log("5 - Find height of a node");
    console.log("6 - Find depth of a node");
    console.log("7 - Pretty print complete tree");
    console.log("8 - Check if the tree is balanced");
    console.log("9 - Print elements of the tree in level-order traversal");
    console.log("10 - Print elements of the tree in pre-order traversal");
    console.log("11 - Print elements of the tree in post-order traversal");
    console.log("12 - Print elements of the tree in in-order traversal");
    console.log("13 - Unbalance the tree by adding numbers > 100");
    console.log("14 - Rebalance the tree");
    console.log("0 - Exit");

    rl.setPrompt("Option: "); // Set prompt text for user input
    rl.prompt(); // Display the prompt
};

// Function to generate an array of 100 random numbers less than 100
const generateRandomArray = () => {
    const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

    return array;
};

// Helper function to generate a random integer between min (inclusive) and max (inclusive)
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to handle user input from the menu
function handleInput(choice) {
    process.stdout.write("\x1Bc"); // Complete terminal reset (including scrollback) for a clean interface on each menu iteration

    switch (choice) {
        case "1": // Create a new binary search tree from a random array of numbers
            const randomArray = generateRandomArray();
            console.log("\nCreating a binary search tree with random numbers < 100:", randomArray);
            tree = new Tree(randomArray);
            console.log("\nTree created!");
            break;

        case "2": // Insert value into the tree
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            // Prompt user for the value to insert
            rl.question("Enter a value to add to the tree: ", (input) => {
                const value = parseInt(input, 10); // Try to convert the input to a number

                // Validate the input
                if (isNaN(value)) {
                    console.log("Invalid input. Please enter a numeric value.");
                } else {
                    tree.insert(value); // Insert the value into the tree
                    console.log(`\n\nValue ${value} added to the tree.`);
                }

                displayMenu(); // Redisplay the menu or handle next steps
            });

            return;

        case "3": // Delete a value from the tree
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            // Prompt user for the value to delete
            rl.question("Enter a value to delete from the tree: ", (input) => {
                const value = parseInt(input, 10); // Try to convert the input to a number

                // Validate the input
                if (isNaN(value)) {
                    console.log("Invalid input. Please enter a numeric value.");
                } else {
                    tree.deleteItem(value); // Delete the value from the tree
                    console.log(`\nValue ${value} was sucessfully deleted from the tree.`);
                }

                displayMenu(); // Redisplay the menu after deletion
            });

            return;

        case "4": // Find a value in the tree
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            rl.question("Enter a value to find in the tree: ", (input) => {
                const value = parseInt(input, 10); // Try to convert the input to a number

                // Validate the input
                if (isNaN(value)) {
                    console.log("Invalid input. Please enter a numeric value.");
                } else {
                    tree.find(value); // Try to find and display the node in the tree if it exists
                }

                displayMenu(); // Redisplay the menu after searching
            });

            return;

        case "5": // Find the height of a node
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            rl.question("Enter a value to find the height (node's height): ", (input) => {
                const value = parseInt(input, 10); // Try to convert the input to a number

                // Validate the input
                if (isNaN(value)) {
                    console.log("Invalid input. Please enter a numeric value.");
                } else {
                    const nodeHeight = tree.height(value); // Calculate the node's height
                    console.log(`\nHeight of node ${value} is ${nodeHeight}`);
                }

                displayMenu(); // Redisplay the menu after calculation
            });

            return;

        case "6": // Find the depth of a node
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            rl.question("Enter a value to find the depth (node's depth): ", (input) => {
                const value = parseInt(input, 10); // Try to convert the input to a number

                if (isNaN(value)) {
                    console.log("Invalid input. Please enter a numeric value.");
                } else {
                    const nodeHeight = tree.depth(value); // Calculate the node's depth
                    console.log(`\nDepth of node ${value} is ${nodeHeight}`);
                }

                displayMenu(); // Redisplay the menu after calculation
            });

            return;

        case "7": // Pretty-print the tree
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            // console.clear();

            prettyPrintTree(tree.root); // Visual representation of the tree

            break;

        case "8": // Check if the tree is balanced
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            if (tree.isBalanced()) {
                console.log("\nThe tree is balanced.");
            } else {
                console.log("\nThe tree is not balanced.");
            }

            break;

        case "9": // Print elements of the tree in level-order traversal
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            console.log("Level-order:", tree.toArray("levelOrder"));

            break;

        case "10": // Print elements of the tree in pre-order traversal
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            console.log("Pre-order:", tree.toArray("preOrder"));

            break;

        case "11": // Print elements of the tree in post-order traversal
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            console.log("Post-order:", tree.toArray("postOrder"));

            break;

        case "12": // Print elements of the tree in in-order traversal
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            console.log("Post-order:", tree.toArray("inOrder"));

            break;

        case "13": // Unbalance the tree by adding random numbers > 1000
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            // Create a new array of random integers between 101 and 1000
            const unbalancingNumbers = Array.from({ length: 15 }, () => getRandomInt(101, 1000));

            console.log("Adding numbers to unbalance the tree:", unbalancingNumbers);

            unbalancingNumbers.forEach((num) => tree.insert(num)); // Add each array number to the tree

            console.log("\nNumbers added. The tree should now be unbalanced.");

            break;

        case "14": // Rebalance the tree
            if (!tree) {
                console.log("Please create a tree first.");
                break;
            }

            const rebalanceResult = tree.rebalance(); // Rebalance the tree
            console.log(rebalanceResult.message);

            break;

        case "0": // Exit the program
            console.log("Exiting... Goodbye!");
            rl.close();
            return;

        default: // Invalid choice
            console.log("Invalid choice. Please select a valid option.");
            break;
    }

    displayMenu(); // Redisplay the menu after handling input
}

// Start the application
console.log("Welcome to the Binary Search Tree Interactive Program!");
displayMenu();

// Listen for user input
rl.on("line", (input) => {
    handleInput(input.trim());
});
