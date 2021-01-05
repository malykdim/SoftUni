/* function equalSums(arr) {
    let isMet = false;
    let match = 0;
    // let sumLeft = 0;
    // let sumRight = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let currentLeftSum = 0;
        let currentRightSum = 0;
        for (let j = i - 1; j >= 0; j--) {
            currentLeftSum += element;            
        }
        for (let k = i + 1; k < arr.length; k++) {
            currentRightSum += element;            
        }
        
        if (currentLeftSum == currentRightSum){
            isMet = true;
            match = i;
            break;
        } 
    }
    if (isMet) {
        // console.log(match);
    } else {
        // console.log("no")
    }
} */
// dava mi greshni rezultati - matematikata mi e greshna

/* Deni *///100/100

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