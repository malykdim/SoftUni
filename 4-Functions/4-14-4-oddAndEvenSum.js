function oddAndEvenSum(num) {
    function oddOrEven(digit) {
        if (digit % 2 !== 0) {
            sumOdd += Number(digit);
        } else {
            sumEven += Number(digit);
        } 
    }
    let str = num.toString();
    let digit = 0;
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < str.length; i++) {
        digit = str[i];
        oddOrEven(digit);                
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
// 100/100 - moe
oddAndEvenSum(1000435); // 9/4
oddAndEvenSum(3495892137259234); // 54/22


/* Deni */
/* 
function oddEvenSum(n) {
    let arr = String(n).split(''); 
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);
        if (num % 2 == 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
        
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}

console.log(oddEvenSum(1000435));
 */