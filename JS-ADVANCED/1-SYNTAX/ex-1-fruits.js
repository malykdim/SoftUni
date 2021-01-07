function fruits(fruit, weight, price) {
    weight = Number(weight) / 1000;
    price = Number(price);
    let money = weight * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruits('orange', '2500', '1.80');
fruits('apple', '1563', '2.35');