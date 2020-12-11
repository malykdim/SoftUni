function orders(item, quantity) {
    let totalPrice = 0;
    let price = 0;
    switch (item) {
        case 'coffee': price = 1.50; break;
        case 'water': price = 1.00; break;
        case 'coke': price = 1.40; break;
        case 'snacks': price = 2.0; break;
    }
    totalPrice = quantity * price;
    return totalPrice.toFixed(2);
}
// 100/100
orders('water', 5);
orders('coffee', 2);