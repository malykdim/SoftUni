/* function employees(arr) {
    let employees = {};
    
    for(let line of arr) {
        employees[line] = line.length;
    }
    
    Object.entries(employees).forEach(element => {
        console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
    });
} // 100/100  */

/* function employees(arr) {
    let employees = [];
    
    arr.forEach(element => {
        let person = {
            name: element,
            number: element.length
        }
        employees.push(person);
    });
    
    employees.forEach(obj => {
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
    });    
} // 100/100 */

/* function employees(arr) {
    class Person {
        constructor(name) {
            this.name = name;
            this.number = name.length;
        }

        print() {
            return `Name: ${this.name} -- Personal Number: ${this.number}`;
        }
    }

    arr = arr.map(x => new Person(x))
        .forEach(obj => {
            console.log(obj.print());
        });
}  // 100/100  */

function employees(arr) {
    class Person {
        constructor(name) {
            this.name = name;
            this.number = name.length;
        }

        print() {
            return `Name: ${this.name} -- Personal Number: ${this.number}`;
        }
    }

    return arr.map(x => {
        let obj = new Person(x);
        return obj.print();
    }).join('\n');
}  // 100/100 

console.log(employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]));

/* employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]); */