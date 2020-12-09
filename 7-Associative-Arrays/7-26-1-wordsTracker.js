function wordsTracker(arr) {
    let words = arr.shift().split(' ');
    let wordsObj = {};
    for(let word of words) {
        wordsObj[word] = 0;
    }
    
    for(let word of arr) {
        if (wordsObj.hasOwnProperty(word)) {
            wordsObj[word]++;
        }        
    }
    
    let keysArr = Object.keys(wordsObj)
    .sort((a, b) => wordsObj[b] - wordsObj[a])
    .forEach(el => console.log(`${el} - ${wordsObj[el]}`));
}
// Deni 100/100
wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);