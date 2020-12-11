function listOfProducts(array) {
    let sorted = array.sort();
    for (let i = 0; i < array.length; i++) {
        console.log(`${i+1}. ${sorted[i]}`);
    }
}
// moe - 100/100
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);