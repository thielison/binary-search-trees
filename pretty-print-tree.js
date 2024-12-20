// console.log the tree in a structured format
const prettyPrintTree = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }

    if (node.right !== null) {
        prettyPrintTree(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);

    if (node.left !== null) {
        prettyPrintTree(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

export default prettyPrintTree;
