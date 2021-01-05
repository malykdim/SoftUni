function mirrorWords(arr) {
    let str = arr[0];
    let regex = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
    let matches = str.match(regex);
    let mirrorWords = [];

    if (matches) {
        console.log(`${matches.length} word pairs found!`);
        for (let match of matches) {
            let words = match.split(match[0]).filter(x => x != '');
            let isMirror = words[0] === words[1].split('').reverse().join('');
            if (isMirror) {
                mirrorWords.push(`${words[0]} <=> ${words[1]}`);
            }
        }
        
        if (mirrorWords.length !== 0) {
            console.log(`The mirror words are:`);
            console.log(`${mirrorWords.join(', ')}`);
        } 
    } else {
        console.log('No word pairs found!')
    }
    if (mirrorWords.length == 0) {
        console.log('No mirror words!');
    }
}

// 100/100 Deni

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);
