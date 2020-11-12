function bitcoinMining(shift){
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let index = 0;
    let digUp = 0;
    let day = 0;
    let money = 0;
    let currentPurchase = 0;
    let bitcoinsBought = 0;
    let isfirstPurchase = false;
    let dayOfFirstPurchase = 0;
    while (day <= shift.length - 1) {
        day++;
        digUp = shift[index];
        if (day % 3 === 0) {
            digUp -= digUp * 0.3;
        }
        money += digUp * goldPrice;        
        if (money >= bitcoinPrice) {            
            if (bitcoinsBought === 0) {
                isfirstPurchase = true;
                if (isfirstPurchase) {
                    let currentDay = day;
                    dayOfFirstPurchase = currentDay;
                }
                isfirstPurchase = false;
            }
            currentPurchase = Math.floor(money / bitcoinPrice);
            bitcoinsBought += currentPurchase;
            money -= currentPurchase * bitcoinPrice;
        }        
        index++;
    }
    console.log(`Bought bitcoins: ${bitcoinsBought}`);  
    if (bitcoinsBought > 1) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
    }       
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]); // 2 / 2 / 10531.78 // OK
bitcoinMining([50, 100]); // 0 / 10126.50 // OK
bitcoinMining([3124.15, 504.212, 2511.124]); // 30 / 1 / 5144.11 // OK

// 90/100
// https://pastebin.com/rfDDqjm5

/* 
function solve(input) {
    let daylyEarnedGold = 0;
    let totalMinedGold = 0;
    let count = 0;
    let bitcoinsBought = 0;
    let levaEarned = 0;
    let bitcoinCount = 0;
    let dayFirstBought = 0;
    let currentBitcoinsBought = 0;

    for (let i = 0; i <= input.length - 1; i++) {
        count++;

        if (count % 3 === 0) {
            daylyEarnedGold = input[i] * 0.7;
        } else {
            daylyEarnedGold = input[i];
        }

        totalMinedGold += daylyEarnedGold;
        levaEarned = totalMinedGold * 67.51;

        if (levaEarned / 11949.16 > 1) {
            currentBitcoinsBought = Math.floor(levaEarned / 11949.16)
            bitcoinsBought += currentBitcoinsBought
            bitcoinCount++;
            totalMinedGold -= currentBitcoinsBought * 11949.16 / 67.51
            levaEarned = totalMinedGold * 67.51;
            if (bitcoinCount === 1) {
                dayFirstBought = count;
            }
            currentBitcoinsBought = 0;
        }
    }
    
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (dayFirstBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBought}`);
    }
    console.log(`Left money: ${levaEarned.toFixed(2)} lv.`);
} // ot kolega
 */