function lastKNSequence(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let lastK = result.slice(-k);
        let sum = 0;
        for (let num of lastK) {
            sum += num;
        }
        result.push(sum);
    }
    console.log(result.join(' '));
} 
// 100/100 Victor

lastKNSequence(6, 3);
lastKNSequence(8, 2);

// function lastKNSequence(n, k) {
//         let result = [1];
//         for (let i = 1; i < n; i++) {
//             let current = sumLastK(result, k);
//             result.push(current);
//         }
//         console.log(result.join(' '));
        
//         function sumLastK(arr, k) {
//             let lastK = arr.slice(-k);
//             let sum = 0;
//             for (let num of lastK) {
//                 sum += num;
//             }
//             return sum;
//         }
//     } 