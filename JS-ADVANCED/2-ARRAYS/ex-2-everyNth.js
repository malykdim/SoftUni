function everyNth(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i+=n) {
        result.push(arr[i]);
    }
    return result;
}

console.log(everyNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2));
console.log(everyNth(['dsa',
'asd', 
'test', 
'tset'], 
2
));
console.log(everyNth(['1', 
'2',
'3', 
'4', 
'5'], 
6));

// 100/100