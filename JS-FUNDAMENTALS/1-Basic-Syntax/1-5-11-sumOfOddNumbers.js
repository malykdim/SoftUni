function sumOfOddNumbers(n){
    let sum = 0;
    for(let i = 1; i <= n*2; i+=2){
        if(i % 2 !== 0){
            console.log(i);
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(7);//100/100

/* Victor
function sumOfOddNumbers(n){
    let sum = 0;
    for (let current = 1, count = 0; i < n; current += 2, count++) {        
        console.log(current);
        sum += current;
        
        if (sum == 5 || sum == 7 || sum == 11){
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        sum = 0;
    }
    console.log('Sum' + sum);
}
*/