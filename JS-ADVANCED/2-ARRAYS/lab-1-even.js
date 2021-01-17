function even(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 2) {
            result[result.length] = arr[i];
    }

    return result.join(' ');
}

console.log(even(['20', '30', '40', '50', '60']));
console.log(even(['5', '10']));

// 100/100