function addAndSubtract(int1, int2, int3) {
    let subtracted = 0;
    let result = sum(int1, int2);
    subtract(result, int3);
    function sum(int1, int2) {
        // get the first 2 integers and subtract them
        let result = int1 + int2;
        return result;
    }
    function subtract(result, int3) {
        // subtracts the third integer from the result
        subtracted = result - int3;
        console.log(subtracted);
        
        return subtracted;
    }
}
// 100/100 // moe reshenie
addAndSubtract(23, 6, 10); // 19
addAndSubtract(1, 17, 30); // -12
addAndSubtract(42, 58, 100); // 0


/* Deni */
function addAndSubtract(x, y, z) {
    function sum(a, b) {
        return a + b;
    }
    
    return sum(x, y) - z;
}
console.log(addAndSubtract(23, 6, 10));


/* Deni - 2 */
function addAndSubtract(x, y, z) {
    let sum = (a, b) =>  a + b;
    
    return sum(x, y) - z;
}
console.log(addAndSubtract(23, 6, 10));