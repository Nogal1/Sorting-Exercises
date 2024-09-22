/* Quick Sort 
selects a "pivot" element and partitions the array into two subarrays: 
one with elements less than the pivot and one with elements greater than the pivot. It recursively sorts the subarrays.
Time Complexity: O(n log n)
Space Complexity: O(log n)
*/

/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            // Swap
            let temp = arr[swapIdx];
            arr[swapIdx] = arr[i];
            arr[i] = temp;
        }
    }

    // Swap the pivot element to the correct position
    let temp = arr[start];
    arr[start] = arr[swapIdx];
    arr[swapIdx] = temp;

    return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right); // Find pivot
        // Recursively sort the left and right parts
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = quickSort;