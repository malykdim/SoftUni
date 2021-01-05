function arrRotation(arr, n) {
    for (let i = 0; i < n; i++) {
        const el = arr.shift();
        arr.push(el);
    }
    
    console.log(arr.join(' '));
}

arrRotation([51, 47, 32, 61, 21], 2); 
arrRotation([32, 21, 61, 1], 4); 
arrRotation([2, 4, 15, 31], 5); 

/* Deni */
