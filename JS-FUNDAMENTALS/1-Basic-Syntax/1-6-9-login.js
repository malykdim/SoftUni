/* function login(input){
    username = input[0];
    let password = username.split("").reverse(username).join(""); 
    
    let index = 1;
    let userInput = input[index];
    
    while (index <= 4){
        if (userInput === password){
            console.log(`User ${username} logged in.`); break;
        } else if (userInput !== password && index === 4){ 
                console.log(`User ${username} blocked!`); break;
        } else {
            console.log("Incorrect password. Try again.");
        }
        
        index++;
        userInput = input[index];
    }
}
login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
//100/100 */

function login(arr){
    let username = arr.shift();
    let pass = username.split('').reverse().join('');
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === pass){
            console.log(`User ${username} logged in.`);
        } else { 
            if (i == 3){
                console.log(`User ${username} blocked!`); break;
            }
            console.log("Incorrect password. Try again.");
        } 
    }
}
login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
// 100/100 Deni