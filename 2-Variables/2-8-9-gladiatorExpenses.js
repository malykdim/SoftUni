function gladiatorExpenses(losses, helm, sword, shield, armor) {    
    let repareHelm = 0;
    let brokenShield = 0;
    let expenses = 0;
    for (let i = 1; i <= losses; i++) {
        if (i % 2 == 0) {
            expenses += helm;
        } 
        if (i % 3 == 0) {
            expenses += sword;
        } 
        if (i % 2 == 0 && i % 3 == 0) {
            expenses += shield;
            brokenShield++;
            if (brokenShield == 2) {
                expenses += armor;
                brokenShield = 0;
            } 
        }        
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);

// 100/100