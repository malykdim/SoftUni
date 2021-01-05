/* function firstAndLastK(arr) {
    let k = arr.shift();
    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(arr.length-k, arr.length).join(' '));
} */

function firstAndLastK(arr) {
    let k = arr.shift();
    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(-k).join(' '));
}

firstAndLastK([2, 7, 8, 9]); // 78 89
firstAndLastK([3, 6, 7, 8, 9]); // 678 789