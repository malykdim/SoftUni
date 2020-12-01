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
    if (bitcoinsBought >= 1) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
    }       
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
