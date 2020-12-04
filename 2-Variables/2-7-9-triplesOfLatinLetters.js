function triplesOfLatinLetters(n) {
    for(let i = 0; i < n; i++){
        let a = String.fromCharCode(i + 97);
        for(let j = 0; j < n; j++){
            let b = String.fromCharCode(j + 97);
            for(let k = 0; k < n; k++){
                let c = String.fromCharCode(k + 97);
                console.log(`${a}${b}${c}`);
            }
        }
    }
}
triplesOfLatinLetters(3);

