function f1Race(arr) {
    let pilots = arr.shift().split(' '); 
    
    for (let line of arr) { 
        let [action, pilot] = line.split(' '); 
        let isRacing = pilots.includes(pilot);

        switch (action) {
            case 'Join':
                if (!isRacing) {
                    pilots.push(pilot);
                }
                break;
            case 'Crash':
                if (isRacing) {
                    let position = pilots.indexOf(pilot);
                    pilots.splice(position, 1);
                    isRacing = false;
                }
                break;
            case 'Pit':
                if (isRacing) {
                    let position = pilots.indexOf(pilot);
                    if (position !== pilots.length-1){
                        let nextPosition = position + 1;
                        let off = pilots.splice(position, 1);
                        pilots.splice(nextPosition, 0, off.toString());                
                    }
                }
                break;
            case 'Overtake':
                if (isRacing) {
                    let position = pilots.indexOf(pilot);
                    if (position !== 0){
                        let previousPosition = position - 1;
                        let off = pilots.splice(position, 1);
                        pilots.splice(previousPosition, 0, off.toString());                
                    }
                }
                break;
        }
    }
    console.log(pilots.join(" ~ "));

}

f1Race(['Vetel Hamilton Slavi', 'Pit Hamilton', 'Overtake Vetel', 'Crash Slavi']);
f1Race(['Vetel Hamilton Raikonnen Botas Slavi', 'Pit Hamilton', 'Overtake LeClerc', 'Join Ricardo', 'Crash Botas', 'Overtake Ricardo', 'Overtake Ricardo','Overtake Ricardo', 'Crash Slavi']);

/* 
F1 Race

The race for the Grand Prix title of Sofia is about to start and all the pilots are in their positions! You are given an array of strings. The first string contains all the pilots in the race, separated by whitespace. The next strings contain actions with information about what happens in the race. Your task is to write a JS function that prints the final result of the race.

You may receive the following actions:
    Join {pilot} 
    Crash {pilot} 
    Pit {pilot} 
    Overtake {pilot}

If you receive the Join action, you should add the pilot at last position in the race, but only if he isn't in the race already.
If you receive the Crash action, the pilot crashes and you must remove him if he is in the race.
If you receive the Pit action, the pilot stops in the pit and you must move him one place down if he is in the race.
If you receive the Overtake action, the pilot overtakes the pilot in front of him and you must move him one place up if he is in the race.
    
Input / Constrains
You will receive an array of strings.
    In the first input element, you will receive all the pilots in the race - sequence of pilot names, separated by space.
    Each of the next elements will be an action.
    There will always be at least one pilot in the race.
    
Output
    As output you must print all the pilots, separated by "~", at the end of the race.
    
Constrains
    The actions will always be valid.
    The pilot will be a string containing only letters from the alphabet.
    Allowed working time/ memory: 100ms / 16MB
    
***********************************************************************************    
Input 1:
['Vetel Hamilton Slavi', 'Pit Hamilton', 'Overtake Vetel', 'Crash Slavi'];

Input 2:
['Vetel Hamilton Raikonnen Botas Slavi', 'Pit Hamilton', 'Overtake LeClerc', 'Join Ricardo', 'Crash Botas', 'Overtake Ricardo', 'Overtake Ricardo','Overtake Ricardo', 'Crash Slavi']    
*/
