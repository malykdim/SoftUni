function integerAndFloat(num1, num2, num3){
    let sum = num1 + num2 + num3;
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
//100/100

/* Victor:
function integerAndFloat(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let convertedSum = Math.trunc(sum);
    if (sum == convertedSum) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
*/
