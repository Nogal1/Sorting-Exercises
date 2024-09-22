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

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = { pivot, quickSort };