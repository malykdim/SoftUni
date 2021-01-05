function shoppingList(arr) {
    let initialList = arr.shift().split('!');
    
    let line = arr.shift();
    while (line !== 'Go Shopping!') {
        let [command, item, newItem] = line.split(' ');
        
        if (command === 'Urgent') {
            if (!initialList.includes(item)) {
                initialList.unshift(item);
            }
        } else if (command === 'Unnecessary') {
            if (initialList.indexOf(item) > -1) {
                let index = initialList.indexOf(item);
                initialList.splice(index,1);
            }
        } else if (command === 'Correct') {
            if (initialList.indexOf(item) > -1) {
                let index = initialList.indexOf(item);
                initialList.splice(index, 1, newItem);
            }
        } else if (command === 'Rearrange') {
            if (initialList.indexOf(item) > -1) {
                let index = initialList.indexOf(item);
                initialList.splice(index, 1);
                initialList.push(item);
            }
        }
        
        line = arr.shift();
    }
    
    console.log(initialList.join(', '));
}

// shoppingList(
//     [
//         'Tomatoes!Potatoes!Bread',
//         'Unnecessary Milk',
//         'Urgent Tomatoes',
//         'Go Shopping!'
//     ]
// );
shoppingList(
    [
        'Milk!Pepper!Salt!Water!Banana',
        'Urgent Salt',
        'Unnecessary Grapes ',
        'Correct Pepper Onion',
        'Rearrange Grapes',
        'Correct Tomatoes Potatoes',
        'Go Shopping!'
    ]

);