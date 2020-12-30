function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    return person;
}

console.log(personInfo('Jane', 'Samonson', 37));
console.log(personInfo('Peter', 'Pan', "20"));

// 100/100
