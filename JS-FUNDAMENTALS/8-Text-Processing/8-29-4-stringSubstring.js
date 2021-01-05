function stringSubstring(word, str) {
    str = str.toLowerCase().split(' ');
    if (str.includes(word.toLowerCase())) {
        console.log(word);        
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language');
stringSubstring('python',
'JavaScript is the best programming language');