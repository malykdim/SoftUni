///////////////////// Deni //////////////////// 100/100
function charactersInRange(a, b) {
    
    let firstCode = a.charCodeAt(0);
    let secondCode = b.charCodeAt(0);
    let start = firstCode < secondCode ? firstCode : secondCode;
    let end = firstCode > secondCode ? firstCode : secondCode;
    let line = '';
    for (let i = start + 1; i < end; i++) {
        line += String.fromCharCode(i) + ' ';
    }
    
    return line;
} 

console.log(charactersInRange('C', '#'));
// charactersInRange('#', ':');
// charactersInRange('C', '#');

// transformirame simvolite v ascii code a -> 97
// vnimavame koe e pyrvo
// na edin red printirame vsichki simvoli mevdu dvete stojnosti

// obratnoto na string.charCodeAt() e string.fromCharCode()