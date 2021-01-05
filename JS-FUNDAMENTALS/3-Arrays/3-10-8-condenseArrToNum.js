function condenseArrToNum(input) {
    while (input.length > 1) {
        let condensed = Array(input.length - 1);
        for (let i = 0; i < input.length - 1; i++) {
            condensed[i] = Number(input[i]) + Number(input[i + 1]);
        }
        
        input = condensed;
    }

    console.log(input[0]);
} 

// 100/100

function condenseArrToNum(input) {
    if (input.length === 1) {
        console.log(input[0]);
        return;
    }
    
    for (let i = 0; i < input.length - 1; i++) {
        input[i] = Number(input[i]) + Number(input[i + 1]);
    }
    
    input.pop();
    condense(input);
} 

// 100/100 

function condenseArrToNum(arr) {
    let num = [];
    for (let i = 0; i < arr.length; i++) {
        num[i] = Number(arr[i]);
    }
    
    while (num.length > 1) {
        let condense = [];
        for (let i = 0; i < num.length - 1; i++) {
            condense[i] = Number(num[i] + num[i + 1]);

        }
        
        num = condense;
        condense = 0;
    }
    
    console.log(Number(num));
}  

// 100/100

condenseArrToNum([2, 10, 3]); 
condenseArrToNum([5, 0, 4, 1, 2]); 
condenseArrToNum([1]); 

/*
Write a program which receives an array of numbers
and condense them by summing adjacent couples of elements
until a single number is obtained.

For example, if we have 3 elements [2, 10, 3],
we sum the first two
and the second two elements
and obtain {2+10, 10+3} = {12, 13},
then we sum again all adjacent elements and obtain {12+13} = {25}.

    While we have more than one element in the array nums[], repeat the following:
⦁	Allocate a new array  of size nums.Length-1.
⦁	Sum the numbers from nums[] to condensed[]:
⦁	condensed[i] = nums[i] + nums[i+1]
⦁	nums[] = condensed[]
*/
