function equalSums(array) {
    
    let isIndex = false;
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        if (i !== 0) {
            for (let j = 0; j < i; j++) {
                leftSum += array[j];            
            }
        }
        if (i !== array.length-1) {
            for (let k = i + 1; k < array.length; k++) {
                rightSum += array[k];            
            }
        }
        if (leftSum === rightSum){
            isIndex = true;
            console.log(i);
        } 
    }
    if (!isIndex) {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]); // 2
equalSums([1, 2]); // no
equalSums([1]); // 0
equalSums([1, 2, 3]); // no
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); // 3

/* Deni *///100/100
