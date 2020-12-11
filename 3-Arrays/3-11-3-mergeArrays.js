/* function mergeArrays(str1, str2) {
    let str3 = [];
    
    for (let i = 0; i < str1.length; i++) {
        let el1 = str1[i];
    }          
    for (let j = 0; j < str2.length; j++) {
        let el2 = str2[j];
    }
    
    if (str1[i] % 2 === 0) {
        let sum = 0;
        // add into the third array the sum of both elements at that index
            sum = Number(el1) + Number(el2);
            str3.push(sum); 
    } else {
        let concat = `${el1}${el2}`;
        // add the concatenation of both elements at that index
        str3.push(concat);
    }
    
    console.log(str3.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']); // 22 - 1522 - 110 - 5636 - 46
// mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']); // 35 - 12312333 - 10 - 77122 - 48
// sama ne stigam do validno reshenie
 */

/* Дени */
function mergeArr(firstArr, secondArr) {
    let result = [];
    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            let sum = Number(firstArr[i]) + Number(secondArr[i]);
            result.push(sum);
        } else {
            result.push(firstArr[i] + secondArr[i]);
        }
    }
    console.log(result.join(' - '));
}
mergeArr(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']); // 22 - 1522 - 110 - 5636 - 46
mergeArr(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']); // 35 - 12312333 - 10 - 77122 - 48
// 100/100
