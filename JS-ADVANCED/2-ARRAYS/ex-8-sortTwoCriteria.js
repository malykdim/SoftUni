function sortTwoCriteria(arr) {
    return arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        
        return a.length - b.length;
    }).join('\n');
}

console.log(sortTwoCriteria([
    'alpha',
    'beta',
    'gamma'
]));
console.log(sortTwoCriteria([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]));
console.log(sortTwoCriteria([
    'test',
    'Deny',
    'omen',
    'Default'
]));

// 100/100