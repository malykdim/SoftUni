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

maxNum([1, 4, 3, 2]); 
maxNum([14, 24, 3, 19, 15, 17]); 
maxNum([41, 41, 34, 20]); 
maxNum([27, 19, 42, 2, 13, 45, 48]); 

/* Deni */ // 100/100
