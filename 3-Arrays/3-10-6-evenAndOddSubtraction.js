function evenAndOddSubtraction(arr) {
    // parse each string to number
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]); 
    }
    // create 2 variables for the sums
    let evenSum = 0; 
    let oddSum = 0; 
    // Iterate through all elements in the array with for-of loop
    // and check if the number is odd or even
    for(let num of arr) {
        if(num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    // print the difference
    console.log(evenSum - oddSum);
}
evenAndOddSubtraction(['1', '2', '3', '4', '5', '6']); // 3
evenAndOddSubtraction(['3', '5', '7', '9']); // -24
evenAndOddSubtraction(['2', '4', '6', '8', '10']); // 30