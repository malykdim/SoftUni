function reverseArrayOfNumbers(n, arr) {
    let arrRev = [];
    for (let i = 0; i < n; i++) {
        arrRev.push(arr[i]); // or arrRev[arrRev.length = arr[i]];
    }
    let output = '';
    for (let i = arrRev.length - 1; i >= 0; i--) {
        output += `${arrRev[i]} `;
    }
    console.log(output);
}

// 100/100

function reverse(n, arr) {
    let partialArr = [];
    for (let i = 0; i < n; i++) {
        partialArr.push(arr[i]); 
    }
    let result = '';
    for (let i = partialArr.length - 1; i >= 0; i--) {   // ili (let i = n; i >= 0; i--)
        result += partialArr[i]; 
        result += ' '; 
    }
    console.log(result);
}

reverse(3, [10, 20, 30, 40, 50]); // 30 20 10
reverseArrayOfNumbers(4, [-1, 20, 99, 5]); // 5 99 20 -1
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47]); // 43 66

// 100/100 /* Victor */

/* 
create a new array with n numbers, 
reverse it and 
print its elements on a single line, 
space separated.
*/
