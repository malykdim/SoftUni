function solve(str) {
    let words = [];
    let pattern = /[\w]+/g;
    let matches = str.match(pattern);
    
    for (let word of matches) {
        words.push(word.toUpperCase());
    } 
    
    console.log(words.join(', '));
}

// 100/100

solve('Hi, how are you?');
solve('hello');
solve('I\'ll be there');