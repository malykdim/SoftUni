function calculator(x, operator, y) {
    let result = 0;
    switch (operator) {
        case '+': result = x + y; break;
        case '-': result = x - y; break;
        case '*': result = x * y; break;
        case '/': result = x / y; break;
    }
    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);
