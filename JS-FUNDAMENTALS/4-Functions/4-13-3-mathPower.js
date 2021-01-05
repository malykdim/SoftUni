function mathPower(num, power) {
    let result = Math.pow(num, power);
    return result;
}
// 100/100 - moq

function mathPower(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = result * base;
    }
    console.log(result);
}
// Victor

mathPower(2, 8); // 256
mathPower(3, 4); // 81