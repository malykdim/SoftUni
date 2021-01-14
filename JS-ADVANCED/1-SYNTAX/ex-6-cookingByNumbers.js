function cookingByNumbers(num, com1, com2, com3, com4, com5) {
    num = Number(num);
    const arr = [com1, com2, com3, com4, com5];
    
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num ++; break; 
            case 'bake': num *= 3; break;
            case 'fillet': num -= num * 0.2; break;
        }
        console.log(num);
    }
}

console.log(cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
console.log(cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));

// 100/100