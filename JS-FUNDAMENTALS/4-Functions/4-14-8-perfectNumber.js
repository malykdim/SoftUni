function perfectNumber(n) {
    let sum = 1;
    for (let i = 2; i <= n/2; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    return sum === n ? "We have a perfect number!" : `It's not so perfect.`;
}

// Deni 100/100

console.log(perfectNumber(6)); // 1+2+3
console.log(perfectNumber(28)); // 1+2+4+7+14
console.log(perfectNumber(1236498));
