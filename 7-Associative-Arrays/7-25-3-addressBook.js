function addressBook(input) {
    let catalog = {};
    for(let line of input) {
        let [name, address] = line.split(':');
        catalog[name] = address;
    }
    
    let sorted = Object.entries(catalog);    
    sorted.sort((a,b) => a[0].localeCompare(b[0]));
    
    for (let [name, address] of sorted) {
        console.log(`${name} -> ${catalog[name]}`);        
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);