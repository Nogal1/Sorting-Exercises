// Bubble Sort
// Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. 
// This process repeats until the list is sorted.
// Time Complexity: O(n²) Space Complexity: O(1)

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+i]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        // If no swaps were made, array is sorted
        if (noSwaps) break;
    }
    return arr;
}

module.exports = bubbleSort;