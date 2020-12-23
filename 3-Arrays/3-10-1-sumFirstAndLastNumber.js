function sumFirstAndLast(str) {
    let first = Number(str.shift());
    let last = Number(str.pop());
    console.log(first + last);
}

sumFirstAndLast(['20', '30', '40']); // 60
sumFirstAndLast(['10', '17', '22', '33']); // 43
sumFirstAndLast(['11', '58', '69']); // 80

// 100/100
