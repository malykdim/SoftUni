function sortBy2Criteria(arr) {
    let lengthAsc = arr.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length);
    for(let item of lengthAsc) {
        console.log(item);        
    }    
} // 100/100
// sortBy2Criteria(["alpha", "beta", "gamma"]);
// sortBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortBy2Criteria(["test", "Deny", "omen", "Default"]);


