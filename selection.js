/*  Selection Sort
Selection Sort works by repeatedly finding the minimum element from the unsorted part and putting it at the beginning.
 Time Complexity: O(n²)
Space Complexity: O(1)
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            // Swap
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

module.exports = selectionSort;