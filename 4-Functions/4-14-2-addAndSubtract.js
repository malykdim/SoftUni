function addAndSubtract(int1, int2, int3) {
    let subtracted = 0;
    let result = sum(int1, int2);
    subtract(result, int3);
    function sum(int1, int2) {        
        let result = int1 + int2;
        return result;
    }
    
    function subtract(result, int3) {        
        subtracted = result - int3;
        console.log(subtracted);
        
        return subtracted;
    }
}

// 100/100 

addAndSubtract(23, 6, 10); 
addAndSubtract(1, 17, 30); 
addAndSubtract(42, 58, 100); 



function addAndSubtract(x, y, z) {
    function sum(a, b) {
        return a + b;
    }
    
    return sum(x, y) - z;
} /* Deni - 1*/

function addAndSubtract(x, y, z) {
    let sum = (a, b) =>  a + b;
    
    return sum(x, y) - z;
} /* Deni - 2 */
