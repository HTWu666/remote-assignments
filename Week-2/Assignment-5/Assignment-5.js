// Based on binarySearch to find the index of the target
function binarySearchPosition(numbers, target) {
    let low = 0;
    let high = numbers.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        let middleNumber = numbers[middle];
        if (middleNumber === target) {
            return middle;
        } else if (middleNumber < target) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3