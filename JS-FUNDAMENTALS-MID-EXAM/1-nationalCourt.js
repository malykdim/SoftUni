function nationalCourt(input) {
    let firstEmployee = Number(input[0]);
    let secondEmployee = Number(input[1]);
    let thirdEmployee = Number(input[2]);// 1-100
    let peopleCount = Number(input[3]);//0-10000
    
    let answeredPerHour = firstEmployee + secondEmployee + thirdEmployee;
    let answered = 0;
    let totalHours = Math.ceil(peopleCount / answeredPerHour);
    let time = 0;
    for (let hour = 1; answered < peopleCount; hour++) {
            if (hour % 4 === 0){
                time++;
                continue;
            } else {
                time++;
                answered += answeredPerHour;
            }
    }
    
    console.log(`Time needed: ${Math.ceil(time)}h.`);
} // 100/100

nationalCourt([ '5', '6', '4', '20' ]);
nationalCourt([ '1', '2', '3', '45' ]);
nationalCourt([ '3', '2', '5', '40' ]);