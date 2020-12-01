function cards(input) {
    let cards = input.shift().split(', '); 
    let numCommands = Number(input.shift()); 
    for (let i = numCommands; i > 0; i--) {
        let command = input.shift().split(', ');
        let action = command.shift();
        switch (action) {
            case 'Add': {
                for (let item of command) {
                    if (cards.includes(item)) {
                        console.log('Card is already bought');
                    } else {
                        console.log('Card successfully bought');
                        cards.push(item);
                    }
                }
                break;
            }
            case 'Remove': {
                for (let item of command) {
                    if (cards.includes(item)) {
                        console.log('Card successfully sold');
                        let sold = cards.indexOf(item);
                        cards.splice(sold, 1);
                    } else {
                        console.log('Card not found');
                    }
                }
                break;
            }
            case 'Remove At': {
                let index = command[0];
                if (index >= 0 && index < cards.length) {
                    cards.splice(index, 1);
                    console.log('Card successfully sold');
                } else {
                    console.log("Index out of range");
                    continue;
                }
                break;
            }
            case 'Insert': {
                let index = command[0];
                let cardName = command[1]; 
                    if (index >= 0 && index < cards.length) {
                            if (cards.includes(cardName)) {
                                console.log('Card is already bought');
                            } else {
                                console.log('Card successfully bought');
                                cards.splice(index, 0, cardName);
                                console.log(cards)
                            }
                    } else {
                        console.log("Index out of range");
                        continue;
                    }
                break;
            }
        }
    }
    
    console.log(cards.join(', ')); 
}

cards(["T-34-85 Rudy, SU-100Y, STG",
"3",
"Add, King Tiger(C)",
"Insert, 2, IS-2M",
"Remove, T-34-85 Rudy"]);
/* cards(["T 34, T 34 B, T92, AMX 13 57",
"4",
"Add, T 34",
"Remove, AMX CDC",
"Insert, 10, M60",
"Remove At, 1"]); */ 

/* 
You will receive a list of Toms already owned premium vehicles on a single line separated by ", ". 
On the next line you will receive a number n. 

On the next n lines, you will receive commands that could be:
    Add, {CardName}: Check if he already owns the wanted Card. 
        If he owns it, print on console:  "Card is already bought"
        If not, print on console:  "Card successfully bought" and add it to the Card list.
    Remove, {CardName}: Check if he owns the Card.
        If he owns it print on console:  "Card successfully sold" and remove it from the Card list.
        If not print on console: "Card not found"
    Remove At, {index}: Check if the index is in the range of the list.
        If not print on console: "Index out of range" and continue.
        If it’s in range, remove at the given index and print on console: "Card successfully sold"
    Insert, {index}, {CardName}: Check if the index is in range of the list and check if he already owns the Card.
        If not print on console: "Index out of range" and continue.
        If it's in range and he doesn't own the Card, then add the Card at the given index and print on console:
        "Card successfully bought"
        If the Card is in range and he owns it already than print on console:
        "Card is already bought"
        
After you go through all the commands you need to print the list on a single line separated by ", ".

Input
The first input line will contain the list of already owned Cards.
The second input line  will be  the number of commands – an integer number in range [0…50].
On the next input lines you will be receiving commands.

Output
As output you must print a single line containing the elements of the list, joined by  ", ".
*/

