function sortNumbers(num1, num2, num3){
    let input = [num1, num2, num3];
    let compare = input.sort();
    let result = compare.reverse();
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
}

//sortNumbers(3, 2, 1);
//sortNumbers(1, 2, 3);
//sortNumbers(2, 1, 3);
//sortNumbers(-2, 1, 3);
//sortNumbers(0, 0, 2);
//sortNumbers(0, 0, 0);

//100/100