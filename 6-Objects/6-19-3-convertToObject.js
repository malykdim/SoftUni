function convertToObject(str) {
    let person = JSON.parse(str);
    
    for(let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }
}
// 100/100
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

/* 
    Write a function that receives a string in JSON format and converts it to object.
    Loop through all the keys and print them with their values in format: "${key}: ${value}"
*/