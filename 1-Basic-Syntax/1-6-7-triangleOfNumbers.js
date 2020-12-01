/* function triangleOfNumbers(n){
    let triangle = '';  
    let counter = 0;
    
    console.log(1);
    for (let i = 2; i <= n; i++){
        counter++;
        triangle += (i + " ");
        console.log(i, triangle);
    } 
}
*/

// Deni
function triangleOfNumbers(n){    
    for (let i = 1; i <= n; i++){
        let line = '';
        for(let j = 1; j <= i; j++){
            line += i + " ";
        }
        console.log(line);
    } 
}
triangleOfNumbers(3);
// triangleOfNumbers(5);
// triangleOfNumbers(6);