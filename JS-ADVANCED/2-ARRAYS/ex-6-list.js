function list(arr) {
    let result = arr.slice(0).sort((a, b) => a.localeCompare(b)).map((el, index) => {
        let result = `${index+1}.${el}`;
        return result;
    });
    
    return result.join('\n');
}

console.log(list(["John", "Bob", "Christina", "Ema"]));

// 100/100