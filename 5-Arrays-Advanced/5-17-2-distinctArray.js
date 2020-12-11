function distinctArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr.indexOf(arr[i], i + 1);
        
        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(arr[i], i + 1);
        }
    }
    return arr.join(' ');
}
// Deni 100/100
// distinctArray([1, 2, 3, 4]); // 
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])); // 7 8 9 2 3 4 1
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5])); // 20 8 12 13 4 5

