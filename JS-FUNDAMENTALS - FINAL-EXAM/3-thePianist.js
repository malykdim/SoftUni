function thePianist(arr) {
    let actions = {
        Add(piece, composer, key) {
            if (collection.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                collection[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        },
        Remove(piece) {
            if (collection.hasOwnProperty(piece)) {
                delete collection[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        },
        ChangeKey(piece, newKey) {
            if (collection.hasOwnProperty(piece)) {
                console.log(`Changed the key of ${piece} to ${newKey}!`);
                collection[piece].key = newKey;
                piece.key = newKey;
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    let items = Number(arr.shift());
    let collection = {};
    for (let i = 0; i < items; i++) {
        let line = arr.shift();
        let [piece, composer, key] = line.split('|');
        collection[piece] = {
            composer,
            key
        };
    }

    let command = arr.shift();
    while (command !== 'Stop') {
        let [actionName, piece, composer, key, newKey] = command.split('|');
        let action = actions[actionName];
        action(piece, composer, key);

        command = arr.shift();
    }
    
    
    let sorted = Object.entries(collection).sort().sort();
    
    for(let piece of sorted) {
        console.log(`${piece[0]} -> Composer: ${piece[1].composer}, Key: ${piece[1].key}`);
    }
}

/* thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]); */
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);