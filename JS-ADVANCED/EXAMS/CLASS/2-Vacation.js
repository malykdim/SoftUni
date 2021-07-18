class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }
    
    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
        
        if (this.kids.hasOwnProperty(grade)) {
            for(let kid of this.kids[grade]) {
                if (kid === `${name}-${budget}`) {
                    return `${name} is already in the list for this ${this.destination} vacation.`
                }
            }
            this.kids[grade].push(`${name}-${budget}`);
        } else {
            this.kids[grade] = [];
            this.kids[grade].push(`${name}-${budget}`);
        }
        return this.kids[grade];
    }
    
    removeChilld(name, grade) {
        if (this.kids.hasOwnProperty(grade)) {
            for (const kid of this.kids[grade]) {
                let kidInfo = kid.split('-');
                let kidName = kidInfo[0];
                if(kidName === name) {
                    let index = this.kids[grade].indexOf(kid);
                    this.kids[grade].splice(index, 1);
                    return this.kids[grade];
                }
            }
        }
        
        return `We couldn't find ${name} in ${grade} grade.`;
    }
    
    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        
        let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
        
        Object.entries(this.kids).sort((a, b) => a[0] - b[0]);
        
        for (const grade in this.kids) {
            let currentNumber = 1;
            result += `Grade: ${grade}\n`;
            for (const kid of this.kids[grade]) {
                result += `${currentNumber}. ${kid}\n`;
                currentNumber++;
            }
        }
        
        return result;
    }
    
    get numberOfChildren() { 
        this._numberOfChildren = 0;
        for (const grade in this.kids) {
            this._numberOfChildren += this.kids[grade].length;
        }
        
        return this._numberOfChildren;
    }
}

let vacation = new Vacation('Mr Pesho', 'San Diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Eli', 5, 2060));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Eddie', 6, 2100));
console.log(vacation.registerChild('Mitko', 10, 1590));

console.log(vacation.removeChilld('Gosho', 9));

console.log(vacation.toString());


// 100/100
/* 
    registerChild(name, grade, budget) {
        // Stores all kids into the kids property by their grade.
        // Every grade corresponds to array of all kids in there by following format
        // {name}-{budget}
        
        // Checks if the current kid's budget is enough for the trip.
        // If it is not, it should return :
        // `{name}'s money is not enough to go on vacation to {destination}.`
        
        // Otherwise we add it if it's not already recorded in and return the current grade.
        
        // If current kid is already into that grade the method should return
        // `{name} is already in the list for this {destination} vacation.`
    }

    removeChilld(name, grade) {
        // Removes a kid from the array of already enrolled kids for this trip if the current kid exists in there
        // if the name of the current kid exists in the current grade, we remove him and return the current grade.
        // If the given kid name does not exist in the given grade, we should return
        // `We couldn't find {name} in {grade} grade.`
    }
    
    toString() {
    // Prints all kids from the kid's property in ascending order by their grade:
    // `{organizer} will take {numberOfChildren} children on trip to {destination}`
    // `Grade: {currentGrade}`
    // `{curentKidNumber}. {kid}`
    // ...
    // `Grade: {nextGrade}`
    // `{curentKidNumber}. {kid}`
    // the new line ("\n") after every kid or grade is at the end.
    // if there are currently no kids for the current trip, the kids property is empty and you should return:
    // `No children are enrolled for the trip and the organization of {this.organizer} falls out...`
    }
    
    numberOfChildren() { // Getter
        // return the current count of all kids into the kid's property.
    }
*/