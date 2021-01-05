function amazingNumbers(number){
    let num = number.toString();
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazingNumbers(1233);
amazingNumbers(999);

/* Victor
function amazingNumbers(number){
    let numAsString = number.toString();
    let sum = 0;
    for(let i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
    }
    let sumAsString = sum.toString();
    if (sumAsString.includes('9')) {
        console.log(`${num} Amazing? True`);        
    } else {
        console.log(`${num} Amazing? False`);
    }
} 
*/