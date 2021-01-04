function numbers(input) {
    let sequence = input.split(' ').map(Number);
    
    let sum = 0;
    for (let number of sequence) {
        sum += number;
    }
    let average = sum / sequence.length;
    
    let greater = sequence.filter(x => x > average);
    
    greater.sort((a, b) => b - a);
    
    if (greater.length === 0) {
        console.log('No');
    } else {
        console.log(greater.slice(0, 5).join(' '));
    }
}

// 100/100

numbers('10 20 30 40 50'); 
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'); 
numbers('1'); 
numbers('-1 -2 -3 -4 -5 -6'); 

/* 
Write a program to read a sequence of integers and find and print the top 5 numbers that are greater than the average value in the sequence, sorted in descending order.

Input
Read from the console a single line holding space separated number.

Output
Print the above described numbers on a single line, space separated. 
If less than 5 numbers hold the above mentioned property, print less than 5 numbers. 
Print “No” if no numbers hold the above property.

Constraints
All input numbers are integers in range [-1 000 000 … 1 000 000]. 
The count of numbers is in range [1…10 000].
*/
