function library(array) {
    let shelf = array.shift().split('&');
    
    let command = array.shift();
    while (command !== 'Done') {
        let [action, title1, title2] = command.split(' | ');

        switch (action) {
            case 'Add Book':
                if (!shelf.includes(title1)) {
                    shelf.unshift(title1);
                }
                break;
            case 'Take Book':
                if (shelf.includes(title1)) {
                    let i = shelf.indexOf(title1);
                    let take = shelf.splice(i, 1);
                }
                break;
            case 'Swap Books':
                    let isPresentOne = shelf.includes(title1);
                    let isPresentTwo = shelf.includes(title2);
                    if (isPresentOne && isPresentTwo) {
                        let hold = shelf.indexOf(title1);
                        shelf.indexOf(title1) = shelf.indexOf(title2);
                        shelf.indexOf(title2) = hold;
                    }
                break;
            case 'Insert Book':
                shelf.push(title1);
                break;
            case 'Check Book':
                let isValid = ((shelf.indexOf(title1) >= 0) && (shelf.indexOf(title1) < shelf.length));
                if (isValid) {
                    console.log(shelf[shelf.indexOf(title1)]);
                } 
                break;
        }
        command = array.shift();
    }
    console.log(shelf.join(', '));
}

library([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
]);
/* library([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
]); */

/*
As a young developer Iskren is a part from software development school team. His task is to do online book library, but he needs your help for that.

On the first line you will receive a String, representing shelf with books in library. Every book is separated with "&".
On the next lines until you receive "Done" command, you will receive following commands:
    - Add Book | {book name}
        Add a book at first place in the shelf.
        If the book already is present on the shelf, ignore the command.
    - Take Book | {book name}
        Remove the book with the given name only if the book is on the shelf, otherwise ignore this command.
    - Swap Books | {book1} | {book2}
        If both books are on the shelf, swap their places.
    - Insert Book | {book name}
        Add a book at the end of the book collection.
    - Check Book | {index}
        Print the name of the book on the given index the book.
        If the index is invalid, ignore the command.

Input
On the 1st line, you will receive a string, representing book names, separated with "&".
On the next lines, until you receive "Done", you will receive commands in the format described above.

Output
Print the collection of books joined by ", ".
"{firstBook}, {secondBook}, …{lastBook}"

Constraints
You won't receive duplicate book names in the initial list of books.
*/