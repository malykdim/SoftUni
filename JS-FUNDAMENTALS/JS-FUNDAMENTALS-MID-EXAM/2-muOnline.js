function muOnline(input) {
    let initialHealth = 100;
    let initialBitcoins = 0;
    let dungeonRooms = input.split('|');
    let currentHealth = initialHealth;
    
    for (let i = 0; i < dungeonRooms.length; i++) {
        room = dungeonRooms[i].split(' ');
        let command = room.shift();
        let number = Number(room.shift());
        if (command === 'chest') {            
            console.log(`You found ${number} bitcoins.`);
            initialBitcoins += number;
        } else if (command === 'potion') {
            if ((currentHealth + number) === initialHealth) {
                break;
            } else if ((currentHealth + number) < initialHealth){
                currentHealth += number;
                console.log(`You healed for ${number} hp.`);
            } else {
                let heal = (initialHealth - currentHealth)
                currentHealth += heal;
                console.log(`You healed for ${heal} hp.`);
            }
            console.log(`Current health: ${currentHealth} hp.`);
        } else if (command !== 'chest' && command !== 'potion') {
            if (currentHealth > 0 && currentHealth > number) {
                currentHealth -= number;
                console.log(`You slayed ${command}.`);
            } else if (currentHealth <= 0 || currentHealth <= number) {
                currentHealth -= number;
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i+1}`);
                break;
            }
        }
    }
    
    if (currentHealth > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${initialBitcoins}`);
        console.log(`Health: ${currentHealth}`);
    }
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'); 
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'); 

/* 
You have initial health 100 and initial bitcoins 0. You will be given a string, representing the dungeons rooms. Each room is separated with '|' (vertical bar): "room1|room2|room3…"
Each room contains a command and a number, separated by space. The command can be:
"potion"
You are healed with the number in the second part. But your health cannot exceed your initial health (100).
First print: "You healed for {amount} hp.". 
After that, print your current health: "Current health: {health} hp.".
"chest"
You've found some bitcoins, the number in the second part.
Print: "You found {amount} bitcoins."
In any other case you are facing a monster, you are going to fight. The second part of the room, contains the attack of the monster. You should remove the monster's attack from your health. 
If you are not dead (health <= 0) you've slain the monster, and you should print ("You slayed {monster}.")
If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you`ve manage to reach: "Best room: {room}".
If you managed to go through all the rooms in the dungeon, print on the next three lines: 
"You've made it!", "Bitcoins: {bitcoins}", "Health: {health}".
*/