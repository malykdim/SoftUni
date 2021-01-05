/* function arrayRotation(arr, rotations) {
    let newArr = arr.splice();
    let output = "";
    for (let i = 1; i <= rotations; i++) {
        let char = newArr[i];  
        let slate = arr.shift(char);      
        newArr.push(slate);
        console.log(newArr);
        output += `${arr[i]} `
    }
    
}
arrayRotation([51, 47, 32, 61, 21], 2); // 32 61 21 51 47
// arrayRotation([32, 21, 61, 1], 4); // 32 21 61 1
// arrayRotation([2, 4, 15, 31], 5); // 4 15 31 2
// myAttempt - unfinished
 */
/* Deni */
// едно завъртане -> взимаме първия елемент и го слагаме накрая на масива
// повтаряме операцията n пъти
function arrRotation(arr, n) {
    for (let i = 0; i < n; i++) {
        const el = arr.shift();
        arr.push(el);
    }
    console.log(arr.join(' '));
}
arrRotation([51, 47, 32, 61, 21], 2); // 32 61 21 51 47
arrRotation([32, 21, 61, 1], 4); // 32 21 61 1
arrRotation([2, 4, 15, 31], 5); // 4 15 31 2