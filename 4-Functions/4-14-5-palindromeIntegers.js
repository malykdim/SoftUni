function palindrome(arr) {
    let result = '';
    for (let num of arr) {
        let isPolindrome = 'true';
        num = String(num);
        let mid = parseInt(num.length / 2);
        for (let i = 0; i <= mid; i++) {
            let lastIndex = num.length-1;
            if (num[i] !== num[lastIndex-i]) {
                isPolindrome = 'false';
                break;
            }
        }
        
        result += isPolindrome + '\n';
    }
    
    return result;
}

// 100/100 /* Deni */

console.log(palindrome([123, 323, 421, 121])); 
console.log(palindrome([32, 2, 232, 1010])); 
