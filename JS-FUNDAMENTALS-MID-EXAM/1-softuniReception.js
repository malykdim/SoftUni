function softuniReception(input) {
    let [eff1, eff2, eff3, students] = input.map(Number);
    let efficiency = eff1 + eff2 + eff3;
    
    let hour = 0;
    while (students > 0) { // ako imame rabota, chakk togawa kazvame, che chasa e pochnal!
        hour++;
        
        if (hour % 4 !== 0) { // ako chasa ne e 4-ti
            students -= efficiency;
        } // v protiven sluchaj nishto ne pravim
    }
    console.log(`Time needed: ${hour}h.`);
}
// 100/100
softuniReception(['5', '6', '4', '20']); // 2
softuniReception(['1', '2', '3', '45']); // 10
softuniReception(['3', '2', '5', '40']); // 5
softuniReception(['1', '1', '1', '0']); // 0
softuniReception(['1', '1', '1', '10000']); // 4445
softuniReception(['100', '100', '100', '0']); // 0
softuniReception(['100', '100', '100', '10000']); // 45