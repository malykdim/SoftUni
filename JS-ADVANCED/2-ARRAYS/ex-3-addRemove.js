function addRemove(arr) {
    const init = 1;
    let current = init;
    let result = [];
    
    for(let command of arr) {
        
        switch (command) {
            case 'add': 
                result.push(current); 
                current++;
                break;
            case 'remove': 
                result.pop(); 
                current++;
                break;
        }
    }
    
    if (result.length > 0) {
        return result.join('\n');
    } else {
        return 'Empty';
    }
}

console.log(addRemove(['add', 
'add', 
'add', 
'add']
));
console.log(addRemove(['add', 
'add', 
'remove', 
'add', 
'add']));
console.log(addRemove(['remove', 
'remove', 
'remove']));

// 100/100