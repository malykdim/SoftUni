function softuniReception(input) {
    let [eff1, eff2, eff3, students] = input.map(Number);
    let efficiency = eff1 + eff2 + eff3;
    
    let hour = 0;
    while (students > 0) { 
        hour++;
        
        if (hour % 4 !== 0) { 
            students -= efficiency;
        } 
    }
    console.log(`Time needed: ${hour}h.`);
}

// 100/100

softuniReception(['5', '6', '4', '20']); 
softuniReception(['1', '2', '3', '45']); 
softuniReception(['3', '2', '5', '40']); 
softuniReception(['1', '1', '1', '0']); 
softuniReception(['1', '1', '1', '10000']); 
softuniReception(['100', '100', '100', '0']); 
softuniReception(['100', '100', '100', '10000']); 
