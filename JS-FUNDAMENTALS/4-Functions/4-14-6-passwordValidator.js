
function passValidator(pass) {
    let input = [];
    loOp(pass);
    function loOp(pass) {
        for (let i = 0; i < pass.length; i++) {
            let char = pass.charCodeAt(i);
            input.push(char);
        }
    }
    
    function length(input) {
        let isValid = false;
        if (input.length >= 6 && input.length <= 10) {
            isValid = true;
        }
        return isValid;
    }
    
    function consist(input) {
        let isValid = true;
        for (const char of input) {
            if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char >= 48 && char <= 57)) {
                continue;
            } else {
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    function digitCheck(input) {
        let isValid = false;
        let countDigits = 0;
        for (const char of input) {
            if (char >= 48 && char <= 57) {
                countDigits++;
            }
        }
        
        if (countDigits >= 2) {
            isValid = true;
        }
        return isValid;
    }
    
    if (length(input) === true && consist(input) === true && digitCheck(input) === true) {
        console.log("Password is valid");
    }
    if (length(input) === false) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (consist(input) === false) {
        console.log("Password must consist only of letters and digits");
    }
    if (digitCheck(input) === false) {
        console.log("Password must have at least 2 digits");
    }
} 

// 100/100 

console.log(passValidator('logIn'));
console.log(passValidator('MyPass123'));
console.log(passValidator('Pa$s$s'));

function passValidator(pass) {
    function isValidLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return "Password must be between 6 and 10 characters";
        }
    }
    
    function isValidChars(pass) {
        let isValidPass = true;
        for (let i = 0; i < pass.length; i++) {
            let isValid = true;
            let code = pass[i].charCodeAt(0);
            if (code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57) {
                isValid = true;
            } else {
                isValid = false;
                isValidPass = false;
                break;
            }
        }
        return isValidPass ? true : "Password must consist only of letters and digits";
    }
    
    function atLeastTwoDigits(pass) {
        let digits = 0;
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt(0);
            if (code >= 48 && code <= 57) {
                digits++;
            }
        }
        return digits >= 2 ? true : "Password must have at least 2 digits";
    }
    
    let result = [];
    if (isValidLength(pass) !== true) {
        result.push(isValidLength(pass));
    }
    if (isValidChars(pass) !== true) {
        result.push(isValidChars(pass));
    }
    if (atLeastTwoDigits(pass) !== true) {
        result.push(atLeastTwoDigits(pass));
    } 
    if (isValidLength(pass) === true && isValidChars(pass) === true && atLeastTwoDigits(pass) === true) {
        result.push("Password is valid");
    }
    return result.join('\n');
} 

// 100/100 // Deni 
