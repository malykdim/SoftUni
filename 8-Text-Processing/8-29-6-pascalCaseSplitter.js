function pascalCaseSplitter(str) {
    let result = [];
    let cap = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            let word = str.substring(cap, i);
            result.push(word);
            cap = i;
        }
    }
    result.push(str.substring(cap, str.length));
    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');