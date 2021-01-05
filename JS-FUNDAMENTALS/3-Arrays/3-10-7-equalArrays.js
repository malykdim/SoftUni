function equalArrays(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        sum1 += arr1[i];
    }
    
    for (let j = 0; j < arr2.length; j++) {
        arr2[j] = Number(arr2[j]);
        sum2 += arr2[j];
    }
        
    let areEqual = true;
    for (let k = 0; k < arr1.length; k++) {
        if (arr1[k] !== arr2[k]) {
            console.log(`Arrays are not identical. Found difference at ${k} index`);
            areEqual = false;
            break;
        } 
    }
    
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum1}`);
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);
