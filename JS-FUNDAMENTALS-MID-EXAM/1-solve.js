function solve(arr) {
    let budget = Number(arr.shift());
    let flourPrice = Number(arr.shift());
    let eggsPrice = flourPrice * 0.75;
    let milkPrice = (flourPrice * 1.25) / 4;
    let oneCozonac = flourPrice + eggsPrice + milkPrice;
    
    let cozonacsCount = 0;
    let coloredEggs = 0;
    while (budget >= oneCozonac) {
        budget -= oneCozonac;
        cozonacsCount++;
        coloredEggs += 3;
        if (cozonacsCount % 3 === 0) {
            let lost = cozonacsCount - 2;
            coloredEggs -= lost;
        }
    }
    
    console.log(`You made ${cozonacsCount} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`);
}

solve([ '20.50', '1.25' ]);
solve([ '15.75', '1.4' ]);

// 100/100
