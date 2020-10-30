function counterStrike(arr) {
    let initialEnergy = arr.shift();
    energy = initialEnergy; 
    let index = 0;
    let distance = arr[index];
    let end = 'End of battle';
    let wonBattles = 0; 
    
    while (distance !== end || distance <= energy) {
        distance = Number(arr[index]); 
        
        if (distance <= energy) {
            energy -= distance; 
            wonBattles++;
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            break;
        }
        
        if (wonBattles % 3 === 0) {
            energy += wonBattles;
        }
        
        distance = arr[++index];
    }
    
    if ( distance === end) {
        console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
    }
}

counterStrike(['100', '10', '10', '10', '1', '2', '3', '73', '10']);
counterStrike([ '200', '54', '14', '28', '13', 'End of battle' ]);

/* 
Write a program that keeps track of every won battle against an enemy. 
You will receive initial energy. 
Afterwards you will start receiving the distance you need to go to reach an enemy until the "End of battle" command is given, or until you run out of energy.
The energy you need for reaching an enemy is equal to the distance you receive. 
Each time you reach an enemy, your energy is reduced. This is considered a successful battle (win). 
If you don't have enough energy to reach an the enemy, print:
"Not enough energy! Game ends with {count} won battles and {energy} energy"
and end the program.
Every third won battle increases your energy with the value of your current count of won battles. 
Upon receiving the "End of battle" command, print the count of won battles in the following format:
"Won battles: {count}. Energy left: {energy}" 
*/