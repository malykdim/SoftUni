function oddPos(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr.map(el => el * 2).reverse();
}

console.log(oddPos([10, 15, 20, 25]));
console.log(oddPos([3, 0, 10, 4, 7, 3]));

// 100/100