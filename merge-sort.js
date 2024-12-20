const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            sortedArray.push(leftArray[i]);
            i++;
        } else {
            sortedArray.push(rightArray[j]);
            j++;
        }
    }

    for (; i < leftArray.length; i++) {
        sortedArray.push(leftArray[i]);
    }

    for (; j < rightArray.length; j++) {
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

export default mergeSort;