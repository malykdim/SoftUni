function classVehicle() {

    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type,
            this.model = model,
            this.parts = {...parts, quality: parts.engine * parts.power},
            this.fuel = Number(fuel)
        }
        
        drive(x) { this.fuel -= x };
    }

    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);

    console.log(vehicle);
}

classVehicle();
