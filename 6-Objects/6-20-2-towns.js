function towns(arrStr) {
    for(let tableRow of arrStr) {
        let [town, latitude, longitude] = tableRow.split(' | ');
        
        let obj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(obj);
    }
}
// 100/100
console.log(towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']));