
/* function reverseStrings(input) {
    for (let i = 0;i < input.length / 2; i++) {
        let oldElement = input[i];
        //console.log(oldElement);
        let previousIndex = input.length - 1 - i;
        //console.log(previousIndex);
        input[i] = input[previousIndex];
        //console.log(input[i]);
        input[previousIndex] = oldElement;
        //console.log(input[previousIndex]);
    }
    console.log(input.join(' '));
}
reverseStrings(['a', 'b', 'c', 'd', 'e']); // e d c b a   
// 100/100  */ 

// reverseArrayOfStrings('abc', 'def', 'hig', 'klm', 'nop'); 
// reverseArrayOfStrings('33', '123', '0', 'dd'); 

/* Victor */
/* 
function swap(arr) {
    let lastIndex = arr.length - 1;
    // за всички еленети в масива:
    
    for (let i = 0; i < arr.length / 2; i++) {
        // - запазваме текущата стойност на елемент от масива в странична променлива
        let temp = arr[i]; 
        
        // - намираме разстоянието -> [lastIndex - i]
        // - определяме огледалния индекс -> arr[lastIndex - i]        
        //  -- на мястото на текущия елемент записваме стойността на огледалния елемент 
        arr[i] = arr[lastIndex - i];   
        
        // на мястото на финалния елемент слагаме стойността на временната променлива (разменяме)
        arr[lastIndex - i] = temp;
    }
    
    // отпечатваме elementite, разделени с интервал
    console.log(arr.join(' '));
}
swap(['a', 'b', 'c', 'd', 'e']); // e d c b a
// 100/100
 */