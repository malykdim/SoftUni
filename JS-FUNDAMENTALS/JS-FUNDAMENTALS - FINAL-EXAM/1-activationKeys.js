function activationKeys(input) {
    let actions = {
        Contains(rawKey, pattern) {
            if (rawKey.indexOf(pattern) > -1) {
                console.log(`${rawKey} contains ${pattern}`);
            } else {
                console.log('Substring not found!');
            } 
            return rawKey;
        },
        Flip(rawKey, mode, start, end) {
            [start, end] = [Number(start), Number(end)];
            let first = rawKey.substring(0, start);
            let second = rawKey.substring(start, end);
            let third = rawKey.substring(end);
            
            if (mode == 'Upper') {
                second = second.toLocaleUpperCase();
            } else {
                second = second.toLocaleLowerCase();
            }
            
            let result = first + second + third;
            console.log(result);
            return result;
        },
        Slice(rawKey, start, end) {
            [start, end] = [Number(start), Number(end)];
            let first = rawKey.substring(0, start);
            let second = rawKey.substring(start, end);
            let third = rawKey.substring(end);
            
            let result = first + third;
            console.log(result);
            return result;
        }
    }
    
    let rawKey = input.shift();
    let line;
    while((line = input.shift()) != 'Generate') {
        let [action, ...params] = line.split('>>>');
        
        rawKey = actions[action](rawKey, ...params);
    }
    
    console.log(`Your activation key is: ${rawKey}`);
} 

// 100/100 Victor

activationKeys([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]);

/* activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
]); */

/* ACTIVATION KEYS
You are about to make some good money, but first you need to think of a way to verify who paid for your product and who didn`t. 
You have decided to let people use the software for a free trial period and then require an activation key in order to continue to use the product. The last step before you could cash out is to design a program that creates unique activation keys for each user. 
So, waste no more time and start typing!

The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.

There are several types of instructions, split by ">>>":
Contains>>>{substring} – checks if the raw activation key contains the given substring.
    If it does prints: "{raw activation key} contains {substring}".
    If not, prints: "Substring not found!"
Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex} - Changes the substring between the given indices (the end index is exclusive) to upper or lower case. 
    All given indexes will be valid.
    Prints the activation key.
Slice>>>{startIndex}>>>{endIndex} - Deletes the characters between the start and end indices (end index is exclusive).
    Both indices will be valid.
    Prints the activation key.
    
Input:
    The first line of the input will be string and it will consist of letters and numbers only. 
    After the first line, until the "Generate" command is given, you will be receiving strings.
    
Output:
    After the "Generate" command is received, print:
    "Your activation key is: {activation key}"
*/
