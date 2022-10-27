function pairWithDifference(arr, size, n) {
    // Initialize positions of two elements
    let i = 0;
    let j = 1;

    // Search for a pair
    while (i < size && j < size) {
        if (i != j && arr[j] - arr[i] == n) {
            return 1;
        }
        else if (arr[j] - arr[i] < n)
            j++;
        else
            i++;
    }
    return 0;
}

// Driver program to test above function
let arr = [1, 8, 30, 40, 100];
let size = arr.length;
let n = 60;
console.log(pairWithDifference(arr, size, n));