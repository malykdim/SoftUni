function bonusScoringSystem(input) {
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());

    let student = input;
    let maxAttendance = 0;
    for (let i = 0; i < studentsCount; i++) {
        let currentAttendances = Number(student[i]);
        
        if (currentAttendances > maxAttendance) {
            maxAttendance = currentAttendances;
        }
    }
    
    let maxBonus = 0;
    if (lecturesCount > 0) {
        maxBonus = maxAttendance / lecturesCount * (5 + initialBonus);
    }

    console.log('Max Bonus: ' + Math.ceil(maxBonus) + '.');
    console.log('The student has attended ' + maxAttendance + ' lectures.');
}

// 100/100 // Ivaylo Papazov

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);
