function factorialDivision(x, y) {
    let factorialNumber = number => {
        if (number >= 1) return number * factorialNumber(number - 1);
        else return 1;
    }
    let result = factorialNumber(x) / factorialNumber(y);
    console.log(result.toFixed(2));
}
// sche 
factorialDivision(5, 2); // 60.00
factorialDivision(6, 2); // 360.00