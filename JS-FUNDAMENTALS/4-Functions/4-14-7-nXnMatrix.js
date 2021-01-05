function matrix(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += n + ' ';            
        }
        console.log(row);
    }
}
// Deni 100/100
matrix(3);
matrix(7);
matrix(2);

/* 
Когато имам да правя матрица винаги въртя 2 вложени for цикъла.
Първия за реда, втория за колоната
*/