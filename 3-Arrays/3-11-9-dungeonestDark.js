function dungeonestDark(input) {    
    let rooms = input[0].split('|');    
    const initialHealth = 100;
    let currentHealth = initialHealth;
    let initialCoins = 0;
    let encounters = 0;
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');
        let item = room[0];
        let effect = Number(room[1]);
        encounters++;        
        if (currentHealth > 0) {
            switch (item) {
                default:
                    currentHealth -= effect;
                    if (currentHealth > 0) {
                        console.log(`You slayed ${item}.`);
                        break;
                    } else {
                        console.log(`You died! Killed by ${item}.`);
                        console.log(`Best room: ${encounters}`);
                        break;
                    }
                case 'potion':
                    if ((currentHealth + effect) <= initialHealth) {
                        currentHealth += effect;
                        console.log(`You healed for ${effect} hp.`);
                    } else {
                        console.log(`You healed for ${initialHealth - currentHealth} hp.`);
                        currentHealth += (initialHealth - currentHealth);
                    }
                    console.log(`Current health: ${currentHealth} hp.`);
                    break;
                case 'chest':
                    initialCoins += effect;
                    console.log(`You found ${effect} coins.`);
                    break;
            }
        }
        if (currentHealth > 0 && i === rooms.length-1) {
            console.log(`You've made it!\nCoins: ${initialCoins}\nHealth: ${currentHealth}`);
        }
    }
}

dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);
/* 
You have initial health 100 and initial coins 0. 
You will be given a string, representing the dungeons rooms. Each room is separated with '|' (vertical bar): "room1|room2|room3…"
Each room contains item or a monster and a number, separated by space. ("item/monster number")

If the first part is "potion": you are healed with the number in the second part. But your health cannot exceed your initial health (100). Print: "You healed for {0} hp."
After that, print your current health: "Current health: {0} hp."
If the first part is "chest": You've found some coins, the number in the second part. Print: "You found {0} coins."
In any other case you are facing a monster, you are going to fight. 
The second part of the room, contains the attack of the monster. You should remove the monster's attack from your health. 
If you are not dead (health <= 0) you've slain the monster, and you should print ("You slayed {monster}.")
If you've died, print "You died! Killed by {monster}." and your quest is over. 
Print the best room you`ve manage to reach: "Best room: {room}".
If you managed to go through all the rooms in the dungeon, print on the next three lines: 
"You've made it!", "Coins: {coins}", "Health: {health}".

Input
You receive a string, representing the dungeons rooms, separated with '|' (vertical bar): "room1|room2|room3…".

Output
Print the corresponding messages, described above.
 */