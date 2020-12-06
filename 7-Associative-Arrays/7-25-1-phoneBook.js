function phoneBook(input) {
    let phonebook = {};
    for(let line of input) {
        let [name, phone] = line.split(' ');
        
        phonebook[name] = phone;
    }
    for (let name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
} // 100/100

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);
