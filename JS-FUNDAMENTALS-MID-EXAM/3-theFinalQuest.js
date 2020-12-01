function theFinalQuest(input) {
    let message = input.shift().split(' ');

    let command = input.shift();
    while (command !== 'Stop') {
        let tokens = command.split(' ');
        let action = tokens.shift();
        let index = 0;
        let word = '';
        let word1 = '';
        let word2 = '';
        switch (action) {
            case 'Delete':
                index = Number(tokens[0]);
                if (isValid(message, index)) {
                    message.splice(index + 1, 1);
                }
                break;
            case 'Put':
                index = Number(tokens[1]);
                word = tokens[0];
                if (isValid(message, index)) {
                    message.splice(index - 1, 0, word);
                }
                break;
            case 'Swap':
                word1 = tokens[0];
                word2 = tokens[1];
                if (isThere(message, word1, word2)) {
                    let i1 = message.indexOf(word1);
                    let i2 = message.indexOf(word2);
                    let temp = word1;
                    message[i1] = word2;
                    message[i2] = temp;
                }
                break;
            case 'Replace':
                word1 = tokens[0];
                word2 = tokens[1];
                if (isThere(message, word1, word2)) {
                    let i2 = message.indexOf(word2);
                    message.splice(i2, 1, word1);
                }
                break;
            case 'Sort':
                message.sort((a, b) => a - b);
                break;
        }
        command = input.shift();
    }

    console.log(message.join(' '));

    function isValid(arrName, index) {
        let isValid = () => {
            if (index >= 0 && index < arrName.length) {
                return true;
            };
        }
        return isValid;
    }
    function isThere(arrName, word1, word2) {
        let exists = () => {
            if (arrName.includes(word1 && word2)) {
                return true;
            } else if (arrName.includes(word2)) {
                return true;
            } else {
                return false;
            }
        }
        return exists;
    }
}

theFinalQuest([
    'Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 2',
    'Put it 4',
    'Stop'
]);
theFinalQuest([
    'This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop'
]);

/* 
After walking through fire, the group has reached the final step of the quest. They have received a list with instructions that will help them resolve the last riddle that will lead them to the truth about the Hunting Games.

Create a program that follows given instructions. 
You will receive a collection of words on a single line, split by a single space. They are not what they are supposed to be, so you have to follow the instructions in order to find the real message. 

You will be receiving commands. Here are the possible ones:
    Delete {index} – removes the word after the given index if it is valid.
    Swap {word1} {word2} – find the given words in the collections if they exist and swap their places.
    Put {word} {index} – add a word at the previous place {index} before the given one, if it is valid. 
        Note: putting at the last index simply appends the word to the end of the list.
    Sort – you must sort the words in descending order.
    Replace {word1} {word2} – find the second word {word2} in the collection (if it exists) and replace it with the first word – {word1}.    
Follow them until you receive the "Stop" command. 

After you have successfully followed the instructions, you must print the words on a single line, split by a space.

Input / Constraints
On the 1st line, you are going to receive the collection of words, split by a single space – strings
On the next lines, you are going to receive commands, until you receive the "Stop" command

Output
Print the words you have gathered on a single line, split by a single space
*/