function smallestTwoNums(arr) {
    arr.sort((a, b) => a - b);
    let result = arr.splice(0, 2);
    return result;
}

console.log(smallestTwoNums([30, 15, 50, 5]));
console.log(smallestTwoNums([3, 0, 10, 4, 7, 3]));

// 100/100