function sumDigits(n) {
    let sum = 0;
    n = n.toString();
    for (let i = 0; i < n.length; i++) {
        sum += Number(n.charAt(i));
    }
    console.log(sum);
}
sumDigits(245678); // 32
sumDigits(97561); // 28
sumDigits(543); // 12
// 100/100


    // toString;
    // for -> += char             // da obhodim vseki edin char i da syberem vseki edin ot elementite

