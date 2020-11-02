function computerStore(array) {
    let customer = array.pop();
    let totalPrice = 0;
    let input = array.shift();
    while (input !== undefined) {
        let price = Number(input);        
        if (price <= 0) {
            console.log("Invalid price!");
            input = array.shift();
            continue;
        } else {
            totalPrice += price;
        }        
        input = array.shift();
    }
    let finalPrice = 0;
    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        let taxes = totalPrice * 0.2;
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        finalPrice = totalPrice + taxes;
    }
    if (customer === 'regular' && finalPrice > 0) {
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    } else if (customer === 'special' && finalPrice > 0) {
        console.log(`Total price: ${(finalPrice*0.9).toFixed(2)}$`);
    }
}
computerStore([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ]);
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ]);
computerStore([
    'regular'
    ]);
    
/* 
Write a program that prints you a receipt for your new computer. 
You will receive the prices (without tax) of the parts until you receive what type of customer is this - special or regular. Once you receive the type of the customer you should print the receipt.

The taxes are 20% of each part's price you receive. 

If the customer is special, then he has a 10% discount of the price of the total price with taxes.

If a given price is not positive number, you should print "Invalid price!" on the console and continue with the next price.

If total price is equal to zero, you should print "Invalid order!" on the console.

Input
You will receive numbers representing prices (without tax) until command "special" or "regular":

Output
The receipt should be in the following format: 

"Congratulations you've just bought a new computer!
Price without taxes: {total price without taxes}$
Taxes: {total amount of taxes}$
-----------
Total price: {total price with taxes}$"

Constraints
Note: All prices should be displayed to the second digit after the decimal point! The discount is applied only on the total price.  Discount is only applicable to the final price!
*/