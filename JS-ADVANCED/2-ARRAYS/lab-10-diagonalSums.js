function diagonalSums(matrix) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i]; // matrix[teku6tiq red][teku6tata kolona]
        secondaryDiagonal += matrix[i][matrix.length - i - 1]; // matrix[teku6tiq red][v kraq na kolonata]
    }
    
    console.log(mainDiagonal, secondaryDiagonal);
}

console.log(diagonalSums([
    [20, 40],
    [10, 60]
]));
console.log(diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));

// 100/100