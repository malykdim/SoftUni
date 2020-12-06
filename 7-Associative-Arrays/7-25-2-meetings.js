function meetings(arr) {
    let meetings = {};
    for (let line of arr) {
        let [day, name] = line.split(' ');
        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;  
            console.log(`Scheduled for ${day}`); 
        } else {
            console.log(`Conflict on ${day}!`); 
        }
    }
    for (let day in meetings) {
            console.log(`${day} -> ${meetings[day]}`) ;
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);