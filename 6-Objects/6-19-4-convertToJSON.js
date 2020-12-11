function convertToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor        
    }
    let strPerson = JSON.stringify(person);
    console.log(strPerson);
}
//  100/100
convertToJSON('George', 'Jones', 'Brown');