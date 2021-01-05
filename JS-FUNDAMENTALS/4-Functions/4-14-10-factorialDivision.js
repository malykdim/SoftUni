function factorialDivision(x, y) {
    let factorialNumber = number => {
        if (number >= 1) return number * factorialNumber(number - 1);
        else return 1;
    }
    let result = factorialNumber(x) / factorialNumber(y);
    console.log(result.toFixed(2));
}

factorialDivision(5, 2); 
factorialDivision(6, 2); 
