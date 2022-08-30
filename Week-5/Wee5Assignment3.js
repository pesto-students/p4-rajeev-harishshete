const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

console.log("hasDuplicate: " + hasDuplicate([1,2,3,4,4]));