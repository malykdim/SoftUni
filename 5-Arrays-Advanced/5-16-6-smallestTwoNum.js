function smallest(array) {
    let sortedInAscending = array.sort((a,b) => a - b);
    let cutted = sortedInAscending.slice(0, 2);
    console.log(cutted.join(' '));
}
// moe - 100/100
smallest([30, 15, 50, 5]); // 5 15
smallest([3, 0, 10, 4, 7, 3]); // 0 3