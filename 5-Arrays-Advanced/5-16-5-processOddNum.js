function processOddNum(inputArr) {
    let filtered = inputArr.filter((v, i) => (i % 2) == 1);
    let doubled = filtered.map(x => x * 2);
    console.log(doubled.reverse());
}

// Victor - 100/100

processOddNum([10, 15, 20, 25]); // 50 30
processOddNum([3, 0, 10, 4, 7, 3]); // 6 8 0
