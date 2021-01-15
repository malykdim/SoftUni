function sameNum(num) {
    const str = num.toString(); 
    let isSame = true;
    let sum = 0;
    
    for(let i = 0; i < str.length; i++) {
        let current = Number(str[i]);
        let next = str[i + 1];
        if (str[i] !== str[i+1] && next !== undefined) {
            isSame = false;
        }
        
        sum += current;
    }
    
    return `${isSame}\n${sum}`;
}

console.log(sameNum(2222222));
console.log(sameNum(1234));

// 100/100