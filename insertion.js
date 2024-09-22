// Insertion Sort
// Insertion Sort builds the sorted array one item at a time. 
// It removes an element from the unsorted part and places it in the correct position in the sorted part.
// Time Complexity: O(n²) Space Complexity: O(1)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

module.exports = insertionSort;