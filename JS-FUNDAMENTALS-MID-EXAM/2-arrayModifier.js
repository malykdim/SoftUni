function arrayModifier(input) {
    let numberArray = input.shift().split(' ').map(Number);
    
    let command = input.shift();
    while (command != 'end') {
        let tokens = command.split(' ');
        
        switch (tokens[0]) {
            case 'swap': {
                let index1 = Number(tokens[1]);
                let index2 = Number(tokens[2]);
                let temp = numberArray[index1];
                numberArray[index1] = numberArray[index2];
                numberArray[index2] = temp;                
                break;
            }
            case 'multiply': {
                let index1 = Number(tokens[1]);
                let index2 = Number(tokens[2]);
                numberArray[index1] *= numberArray[index2];
                break;
            }
            case 'decrease':
                numberArray = numberArray.map(x => --x);
                break;
        }
        command = input.shift();
    }
    console.log(numberArray.join(', '));
}

// 100/100

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);
