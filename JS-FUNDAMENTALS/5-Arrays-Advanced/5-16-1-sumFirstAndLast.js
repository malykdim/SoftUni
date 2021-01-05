/* function sumFirstAndLast(input) {
    input = input.map(Number);
    return (input[0] + input.pop());
} // 100/100 Presentation */

console.log(sumFirstAndLast(['20', '30', '40'])); // 60
console.log(sumFirstAndLast(['5', '10'])); // 15
// Victor:
function sumFirstAndLast(inputArr) {
    let first = Number(inputArr[0]);
    // let last = inputArr[inputArr.length-1];
    let last = Number(inputArr.pop());
    return first + last;
} // 100/100