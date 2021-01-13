function sumNtoM(n, m) {
    n = Number(n);
    m = Number(m);
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;        
    }
    console.log(sum);
}

sumNtoM('1', '5');
sumNtoM('-8', '20');

// 100/100