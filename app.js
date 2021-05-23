//Part One
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep.'
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();

//Part Two
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.honk()


//Part Three
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!'
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

//Part Four
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}