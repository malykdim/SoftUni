function distanceBetweenPoints(x1, y1, x2, y2){
    let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));    
    console.log(Math.abs(result));
}
distanceBetweenPoints(2, 4, 5, 0); // 5
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985); // 24.50778901186315
