function squareOfStars(size) {
    let result = '* '.repeat(size);
    if (typeof size === 'number') {
        for (let i = 1; i <= size; i++) {
            console.log(result);
        }    
    } else {
        for (let i = 1; i <= 5; i++) {
            console.log('* '.repeat(5));
        }
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars('');

// 100/100