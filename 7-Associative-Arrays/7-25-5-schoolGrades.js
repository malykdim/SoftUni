function schoolGrade(input) {
    let students = {};
    
    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        
        if (!students.hasOwnProperty(name)) {
            students[name] = [];            
        }
    
        let existing = students[name];
        for (let grade of grades) {
            existing.push(grade);
        }
    }
    
    let sorted = Object.entries(students);
    sorted.sort(compareAverage);
    
    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }
    
    function compareAverage(a, b) {
        return a[1].reduce((p,c) => p + c, 0) / a[1].length -
                b[1].reduce((p,c) => p + c, 0) / b[1].length;
    }
}

schoolGrade([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);
