/* function lastKNSequence(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current-k);
        let end = current-1;
        let sum = 0;
        for (let i = start; i < end; i++) {
            sum += seq[i];            
        }
        seq[current] = sum;        
    }
    console.log(seq.join(' '));
}
// ?????? */
lastKNSequence(6, 3);
lastKNSequence(8, 2);

// function lastKNSequence(n, k) {
//     let result = [1];
//     // repeat loop n-times
//     for (let i = 1; i < n; i++) {
        //--calculate current element as sum of previous k elements
//         let lastK = result.slice(-k);
//         let sum = 0;
//         for (let num of lastK) {
//             sum += num;
//         }
//         //--store values in array
//         result.push(sum);
//     }
//     console.log(result.join(' '));
// } // 100/100 Victor

function lastKNSequence(n, k) {
        let result = [1];
        for (let i = 1; i < n; i++) {
            let current = sumLastK(result, k);
            result.push(current);
        }
        console.log(result.join(' '));
        
        function sumLastK(arr, k) {
            let lastK = arr.slice(-k);
            let sum = 0;
            for (let num of lastK) {
                sum += num;
            }
            return sum;
        }
    } 