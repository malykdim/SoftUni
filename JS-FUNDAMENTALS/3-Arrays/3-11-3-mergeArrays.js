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

mergeArr(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']); 
mergeArr(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']); 

// 100/100 /* Дени */
