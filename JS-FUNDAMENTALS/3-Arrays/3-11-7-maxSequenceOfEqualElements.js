function sequence(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentSeq = [arr[i]];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentSeq.push(arr[j]);
            } else {
                break;
            }
        }
        if (result.length < currentSeq.length) {
            result = currentSeq;
        }
    }
    console.log(result.join(' '));
}

// 100/100

sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); // 2 2 2 
sequence([1, 1, 1, 2, 3, 1, 3, 3]); // 1 1 1 
sequence([4, 4, 4, 4]); // 4 4 4 4
sequence([0, 1, 1, 5, 2, 2, 6, 3, 3]); // 1 1

/* 
Write a function that finds the longest sequence of equal elements in an array of numbers. 
If several longest sequences exist, print the leftmost one.    
*/ 
