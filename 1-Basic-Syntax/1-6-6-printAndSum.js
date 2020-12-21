function solve(start, end){
    let sum = 0;
    let output = "";
    
    for (let i = start; i <= end; i++){
        output += i + " ";        
    }
    console.log(output);
    
    for (let i = start; i <= end; i++){
        sum += i;
    }        
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);

// Deni
function solve(start, end){
    let sum = 0;
    let line = "";
    
    for (let i = start; i <= end; i++){
        line += i + " ";  
        sum += i;      
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}
