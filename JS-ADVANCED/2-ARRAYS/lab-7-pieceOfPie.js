function pieceOfPie(arr, target1, target2) {
    let firstIndex = arr.indexOf(target1);
    let secondIndex = arr.indexOf(target2);
    let newArray = arr.slice(firstIndex, secondIndex+1);

    return newArray;
}

console.log(pieceOfPie(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(pieceOfPie(
    ['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));

// 100/100