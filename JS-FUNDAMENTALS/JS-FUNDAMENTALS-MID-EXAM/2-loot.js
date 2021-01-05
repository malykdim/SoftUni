function loot(input) {
    let treasureChest = input.shift().split('|'); //[''] 
    
    let command = input.shift(); // ''
    while (command !== 'Yohoho!') {
        let tokens = command.split(' '); //[''] 
        let action = tokens.shift(); // ''

        switch (action) {
            case 'Loot': {
                for (let item of tokens) {
                    if (treasureChest.includes(item)) {
                        continue;
                    } else {
                        treasureChest.unshift(item);
                    }
                }
                break;
            }
            case 'Drop': {
                let index = Number(tokens[0]);
                if (index < 0 || index >= treasureChest.length) {
                    command = input.shift();
                    continue;
                } else {
                    let remove = treasureChest.splice(index, 1);
                    treasureChest.push(remove.toString());
                }
                break;
            }
            case 'Steal':
                let count = Number(tokens[0]);
                if (treasureChest.length < count) {
                    let steal = treasureChest.splice(0, treasureChest.length);
                    console.log(steal.join(', '));
                } else {
                    let steal = treasureChest.splice(-count);
                    console.log(steal.join(', '));
                }
                break;
        }
        command = input.shift();
    }
    
    let sum = 0;        
    for (let item of treasureChest) {
        sum += item.length;
    }
    
    let average = sum / treasureChest.length;
    if (treasureChest.length !== 0) {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

loot([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
]); 
loot([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
]); 

/* 
The pirates need to carry a treasure chest safely back to the ship. Looting along the way.
Create a program that manages the state of the treasure chest along the way. On the first line you will receive the initial loot of the treasure chest, which is a string of items separated by a '|'.
"{loot1}|{loot2}|{loot3}… {lootn}"

The following lines represent commands until "Yohoho!" which ends the treasure hunt:
Loot {item1} {item2}…{itemn} – pick up treasure loot along the way. Insert the items at the beginning of the chest. If an item is already contained don't insert it.
Drop {index} – remove the loot at the given position and add it at the end of the treasure chest. If the index is invalid skip the command.
Steal {count} – someone steals the last count loot items. If there are less items than the given count remove as much as there are. Print the stolen items separated by ', ':
{item1}, {item2}, {item3} … {itemcount}

In the end output the average treasure gain which is the sum of all treasure items length divided by the count of all items inside the chest formatted to the second decimal point:
"Average treasure gain: {averageGain} pirate credits."
If the chest is empty print the following message:
"Failed treasure hunt."

Input
On the 1st line you are going to receive the initial treasure chest (loot separated by '|')
On the next lines, until "Yohoho!", you will be receiving commands.

Output
Print the output in the format described above.

Constraints
The loot items will be strings containing any ASCII code.
The indexes will be integers in the range [-200…200]
The count will be an integer in the range [1….100]
*/
