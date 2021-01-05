// find all the top integers in an array
// top integer -> bigger than all the elements to its right
// print all top integers, separated by single space
/* function maxNumber(arr) {
    let top = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > prevNum) {}
    }
    console.log(top.join(' '));
} 
maxNumber([1, 4, 3, 2]); // 4 3 2
maxNumber([14, 24, 3, 19, 15, 17]); // 24 19 17
maxNumber([41, 41, 34, 20]); // 41 34 20
maxNumber([27, 19, 42, 2, 13, 45, 48]); // 48
*/

/* Deni */ // 100/100
//
function maxNum(arr) {
    
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let isBigger = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}

maxNum([1, 4, 3, 2]); // 4 3 2
maxNum([14, 24, 3, 19, 15, 17]); // 24 19 17
maxNum([41, 41, 34, 20]); // 41 34 20
maxNum([27, 19, 42, 2, 13, 45, 48]); // 48
