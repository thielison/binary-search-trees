const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            sortedArray.push(leftArray[i]);
            i += 1;
        } else {
            sortedArray.push(rightArray[j]);
            j += 1;
        }
    }

    for (; i < leftArray.length; i += 1) {
        sortedArray.push(leftArray[i]);
    }

    for (; j < rightArray.length; j += 1) {
        sortedArray.push(rightArray[j]);
    }

    return sortedArray;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid, arr.length));

    return merge(left, right);
};

const sortWithoutDuplicates = (arr) => {
    // Sort the input array
    const sortedArray = mergeSort(arr);

    // Remove duplicates
    const uniqueSortedArray = [...new Set(sortedArray)];

    // Return a sorted, unique array (without duplicates)
    return uniqueSortedArray;
};

export default sortWithoutDuplicates;
