function sorting(arr) {   
    let ascending = arr.slice().sort((a, b) => a - b);
    let descending = arr.slice().sort((a, b) => b - a);
    
    let output = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            
        }
        if (i % 2 === 0) {
            output.push(descending.shift());
        } else {
            output.push(ascending.shift());
        }
        
    }
    console.log(output.join(' '));
}

// 100/100 Miro

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); // 94 1 69 2 63 3 52 18 31 21
