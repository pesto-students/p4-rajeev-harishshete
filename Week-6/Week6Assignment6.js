function findPair(arr, size, n) {
    // Initialize positions of two elements
    let i = 0;
    let j = 1;

    // Search for a pair
    while (i < size && j < size) {
        if (i != j && arr[j] + arr[i] == n) {
            return 1;
        }
        else if (arr[j] + arr[i] < n)
            j++;
        else
            i++;
    }
    return 0;
}

// Driver program to test above function
let arr = [30, 40, 100,1, 8];
let size = arr.length;
let n = 70;
console.log(findPair(arr, size, n));