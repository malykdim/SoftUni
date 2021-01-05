
function reverseStrings(input) {
    for (let i = 0;i < input.length / 2; i++) {
        let oldElement = input[i];        
        let previousIndex = input.length - 1 - i;        
        input[i] = input[previousIndex];        
        input[previousIndex] = oldElement;        
    }
    
    console.log(input.join(' '));
}

reverseStrings(['a', 'b', 'c', 'd', 'e']); // e d c b a  
reverseArrayOfStrings('abc', 'def', 'hig', 'klm', 'nop'); 
reverseArrayOfStrings('33', '123', '0', 'dd'); 

// 100/100  
 
function swap(arr) {
    let lastIndex = arr.length - 1;
    
    for (let i = 0; i < arr.length / 2; i++) {        
        let temp = arr[i];        
        
        arr[i] = arr[lastIndex - i];           
        
        arr[lastIndex - i] = temp;
    }
        
    console.log(arr.join(' '));
}

// 100/100 /* Victor */
