function cityInfo(city) {
    for (const key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
}

// 100/100

cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

function cityInfo(city) {
    let keys = Object.keys(city);
    for (const key of keys) {
        let value = city[key];
        console.log(`${key} -> ${value}`);
    }
}

// 100/100
