function sumFirstAndLast(input) {
    input = input.map(Number);
    return (input[0] + input.pop());
} 

// 100/100 

console.log(sumFirstAndLast(['20', '30', '40'])); 
console.log(sumFirstAndLast(['5', '10'])); 

function sumFirstAndLast(inputArr) {
    let first = Number(inputArr[0]);    
    let last = Number(inputArr.pop());
    return first + last;
} 

// Victor: 100/100 
