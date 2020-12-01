function disneylandJourney(array) {
    let journeyPrice = Number(array.shift());
    let monthsToSave = Number(array.shift());
    let moneySaved = 0;
    
    for (let month = 1; month <= monthsToSave; month++) {
        if (month % 2 !== 0 && month !== 1) {
            moneySaved -= moneySaved * 0.16;
        }
        
        if (month % 4 === 0) {
            moneySaved += moneySaved * 0.25;
        }
        
        moneySaved += journeyPrice * 0.25;
    }
    
    if (moneySaved >= journeyPrice) {
        let extra = moneySaved - journeyPrice;
        console.log(`Bravo! You can go to Disneyland and you will have ${extra.toFixed(2)}lv. for souvenirs.`);
    } else {
        let extra = journeyPrice - moneySaved;
        console.log(`Sorry. You need ${Math.abs(extra).toFixed(2)}lv. more.`);
    }
}

disneylandJourney([ '1000', '4' ]);
disneylandJourney([ '3265', '3' ]);

/* 
You are planning a trip to Disneyland in the next year. Are you able to save money for it?

Create a program that checks if you can save the money for the Disneyland’s journey. You have a certain number of months for which you can collect the money.

At the end of each month, you save 25% of the cost of the journey. 
At the beginning of every odd month (except the first one) you spent 16% of the money collected so far for clothes and shoes.
Every 4th (fourth) month at the beginning of the month your boss gives you а bonus. It is 25% of the money collected so far.	

If you save enough money for the journey, calculate how much money will be left for the souvenirs. Then print the following:
"Bravo! You can go to Disneyland and you will have {money}lv. for souvenirs."
If the saved money is less you should calculate how much money you need more. Then print the following:
"Sorry. You need {money}lv. more."
Both numbers should be formatted to the 2nd decimal place.

Input
⦁	On the 1st line you will receive how much the journey will cost – a real number in the range [500.0…10000.0]
⦁	On the 2nd line you will receive the number of months for which you have to collect money – an integer number in the range [1…12]
Output
⦁	 Print the output in the format described above.
*/