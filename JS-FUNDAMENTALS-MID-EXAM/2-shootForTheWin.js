function shootForTheWin(arr) {
    let targets = arr.shift().split(' ').map(Number);
    
    count = 0;
    
    let line = arr.shift();
    while (line !== 'End') {
        index = Number(line);
        let currentTarget = targets[index];

        let isInRange = (index > -1 && index < targets.length);
        if (isInRange) {
            targets[index] = -1;
            count++;
            
            for (let i = 0; i < targets.length; i++) {
                if (targets[i] !== -1) {
                    if (currentTarget < targets[i]) {
                        targets[i] -= currentTarget;
                    } else {
                        targets[i] += currentTarget;
                    }
                }
            }
        }

        line = arr.shift();
    }
    
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}

// 100/100

shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']);
shootForTheWin([ '30 30 12 60 54 66', '5', '2', '4', '0', 'End' ]);
