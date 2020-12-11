function printCertificate(grade, namesArr) {
    if (pass(grade)) {
        printHeader();
        getName(namesArr);
        formatGrade(grade);
    } else {
        console.log(`${namesArr[0]} ${namesArr[1]} does not qualify`);
    }
    
    function pass(grade) { // g => g >= 3
        return grade >= 3;
    }
    function printHeader() {
        console.log(' ~~~~~ {@} ~~~~~ ');
        console.log(' ~ Certificate ~ ');
        console.log(' ~~~ ~~~~~~~ ~~~ ');
    }
    function getName(nameArr) {
        return nameArr[0] + ' ' + nameArr[1];
    }
    function formatGrade(grade) {
        let result = '';
        if (grade < 3) {
            console.log('Fail');
        } else if (grade < 3.50) {
            console.log('Poor');
        } else if (grade < 4.50) {
            console.log('Good');
        } else if (grade < 5.50) {
            console.log('Very good');
        } else if (grade > 5.50) {
            console.log('Excellent');
        }
        return result;
    }
}
printCertificate(5.5, ['John', 'Smith']);