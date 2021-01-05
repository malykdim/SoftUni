function replaceRepChars(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i+1]) {
            result += str[i];
        }        
    }
    console.log(result);
}

replaceRepChars('aaaaabbbbbcdddeeeedssaa');
replaceRepChars('qqqwerqwecccwd');