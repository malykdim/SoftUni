function revealWords(words, str) {
    words = words.split(', ');
    
    for (let word of words) {
        let starsStr = '*'.repeat(word.length);
        str = str.replace(starsStr, word);
    }
    console.log(str);
}

revealWords('great',
'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');