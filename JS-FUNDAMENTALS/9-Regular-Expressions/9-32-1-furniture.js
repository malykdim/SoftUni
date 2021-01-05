function furniture(arr) {
    let result = 'Bought furniture:\n';
    let total = 0;
    for(let line of arr) {
        let regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
        let match = regex.exec(line);
        if (match) {
            result += match.groups.name + '\n';
            total += Number(match.groups.price) * Number(match.groups.quantity);
        }
    }
    result += `Total money spend: ${total.toFixed(2)}`;
    console.log(result);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);