function pirates(days, dailyPlunder, target) {
    let plunder = 0;
    for (let day = 1; day <= days; day++) {
        plunder += dailyPlunder;
        if (day % 3 === 0) {
            plunder += dailyPlunder * 0.5;
        }
        if (day % 5 === 0) {
            plunder -= plunder * 0.3;
        }
    }
    
    let percentage = (plunder * 100 / target) ;
    
    if (plunder >= target) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
    
}

pirates(5, 40, 100); // Ahoy! 154.00 plunder gained.
pirates(10, 20, 380); // Collected only 36.29% of the plunder.
