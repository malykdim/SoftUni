function houseParty(arr) {
    let guests = [];
    for(let i = 0; i < arr.length; i++) {
        let line = arr[i];
        let command = line.split(' ')
        let name = command[0];
        let info = command.slice(1).join(' ');
        
        if (info === 'is going!') {
            if (! guests.includes(name)) {
                guests.push(name);                
            } else {
                console.log(`${name} is already in the list!`);
            }
        } 
        if (info === 'is not going!') {
            if (! guests.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guests.indexOf(name);  
                guests.splice(index, 1);              
            }
        }
    }
    
    guests.forEach(element => {
        console.log(element);
    });
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']); 

/* houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']); */
