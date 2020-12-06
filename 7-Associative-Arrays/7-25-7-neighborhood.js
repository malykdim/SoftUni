function neighborhood(input) {
    let beginning = input.shift().split(', ')
    let neighborhoods = new Map();
    
    for(let item of beginning) {
        neighborhoods.set(item, []);
    }
    
    for(let item of input) {
        let [nei, person] = item.split(' - ')
        if (neighborhoods.has(nei)) {
            neighborhoods.get(nei).push(person);
        }
    }
    
    let sorted = Array.from(neighborhoods);
    sorted.sort(([neiA, personsA], [neiB, personsB]) => personsB.length - personsA.length);
    
    for(let [nei, persons] of sorted) {
        console.log(`${nei}: ${persons.length}`);        
        for(let person of persons) {
            console.log(`--${person}`);            
        }
    }
}
// 100/100
neighborhood(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);