function negativeOrPositive(input) {
    let result = [];
    for (let num of input) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num)
        }
    }
    console.log(result.join('\n'));
} // 100/100


negativeOrPositive([7, -2, 8, 9]); // -2 7 8 9
negativeOrPositive([3, -2, 0, -1]); // -1 -2 3 0