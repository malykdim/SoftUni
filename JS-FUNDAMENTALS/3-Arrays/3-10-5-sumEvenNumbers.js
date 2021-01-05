function sumEvenNumbers(arr) {
    // parse each string to number
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]); 
    }
    // create variable for the sum
    let sum = 0; 
    // Iterate through all elements in the array with for-of loop
    for(let num of arr) {
        // check if the number is even
        if(num % 2 === 0) {
            sum += num;
        }
    }
    // print the total sum
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']); // 12
sumEvenNumbers(['3', '5', '7', '9']); // 0
sumEvenNumbers(['2', '4', '6', '8', '10']); // 30
