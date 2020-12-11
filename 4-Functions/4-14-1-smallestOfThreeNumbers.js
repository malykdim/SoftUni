function smallestOfThreeNumbers(int1, int2, int3) {
    let numbers = [int1, int2, int3];
    let minNumber = 0;
    
    for (i = 0; i < numbers.length; i++) {
        if (minNumber === 0 || numbers[i] < minNumber) {
            minNumber = numbers[i];
        } 
    }
    console.log(minNumber);
}
// 100/100
smallestOfThreeNumbers(2, 5, 3); // 2
smallestOfThreeNumbers(600, 342, 123); // 123
smallestOfThreeNumbers(25, 21, 4); // 4

/* Deni */

function smallestOfThreeNumbers(int1, int2, int3) {
    let numbers = [int1, int2, int3];
    let minNumber = 0;
    
    for (i = 0; i < numbers.length; i++) {
        if (minNumber === 0 || numbers[i] < minNumber) {
            minNumber = numbers[i];
        } 
    }
    console.log(minNumber);
}
// 100/100
smallestOfThreeNumbers(2, 5, 3); // 2
smallestOfThreeNumbers(600, 342, 123); // 123
smallestOfThreeNumbers(25, 21, 4); // 4  