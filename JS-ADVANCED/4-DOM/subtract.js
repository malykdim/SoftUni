function subtract() {
    const first = document.querySelector('#firstNumber').value;
    const second = document.querySelector('#secondNumber').value;
    
    const result = Number(first) - Number(second);
    
    
    document.querySelector('#result').textContent = result;
}

// 100/100