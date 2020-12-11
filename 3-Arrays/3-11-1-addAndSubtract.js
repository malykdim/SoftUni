/* function addAndSubtract(array) {
    let sum1 = 0;
    for (let i = 0; i < array.length; i++) {
        sum1 += array[i];
    }
    
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = array[i];
        }
        if (array[i] % 2 === 0 && array[i] >= 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
        newArr.push(array[i]);
    }
    
    let sum2 = 0;
    for (let i = 0; i < newArr.length; i++) {
        sum2 += newArr[i];
    }
    
    console.log(newArr);
    console.log(sum1);
    console.log(sum2);
}
 */
// addAndSubtract([-5, 11, 3, 0, 2]); // [-5, 10, 1, 3, 6] 11 15 // ok
// addAndSubtract([5, 15, 23, 56, 35]); // [5, 14, 21, 59, 31] 134 130 // ok
// 33/100 ???
// addAndSubtract([7, 16, 93, -6, 75]); // [7, 17, 91, -9, 71] 185 177 // ?

// Miro: 
/* 
function addAndSubtract(array) {
    let sum1 = 0;
    let sum2 = 0;
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let result = array[i];
        sum1 += result;
        
        if (result % 2 === 0) {
            result += i;
            newArr.push(result);
        } else {
            result -= i;
            newArr.push(result);
        }
        sum2 += result;
    }
    
    console.log(newArr);
    console.log(sum1);
    console.log(sum2);
}
addAndSubtract([-5, 11, 3, 0, 2]); // [-5, 10, 1, 3, 6] 11 15 // ok
// 100/100
 */
// Miro: 
/* 
function addAndSubtract(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArr.push(array[i] + i);
        } else {
            newArr.push(array[i] - i);
        }
    }
    
    console.log(newArr);
    console.log();
    console.log();
}
addAndSubtract([-5, 11, 3, 0, 2]); // [-5, 10, 1, 3, 6] 11 15 // ok
// 100/100
 */

/* Deni */

function addAndSubtract(array) {
    let firstSum = 0;
    for(let el of array) {
        firstSum += el;
    }
    
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element % 2 === 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
    }
    
    let secondSum = 0;
    for(let el of array) {
        secondSum += el;
    }
    
    console.log(array);
    console.log(firstSum);
    console.log(secondSum);
}
addAndSubtract([-5, 11, 3, 0, 2]); // [-5, 10, 1, 3, 6] 11 15 // ok
// 100/100


