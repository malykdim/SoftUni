function solve(arr, n) {
    let result = arr.slice();

    for (let i = 0; i < n; i++) {
        let last = result.pop();
        result.unshift(last);
    }

    return result.join(' ');
}

console.log(solve([
    '1',
    '2',
    '3',
    '4'],
    2
));
console.log(solve([
    'Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
));

    // 100/100