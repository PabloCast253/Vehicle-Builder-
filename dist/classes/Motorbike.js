// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    // Constructor for the Motorbike class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels = []) {
        // Call the parent class constructor
        super();
        // Initialize the Motorbike-specific properties
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Ensure the wheels array has exactly 2 wheels
        if (wheels.length === 2) {
            this.wheels = wheels;
        }
        else {
            // Create two default Wheel objects if wheels are not provided
            this.wheels = [new Wheel(), new Wheel()];
        }
    }
    // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Motorbike
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    printDetails() {
        // Call the parent class's printDetails method
        super.printDetails();
        // Log Motorbike-specific details
        console.log(`Top Speed: ${this.topSpeed} km/h`);
        console.log(`Wheels: ${this.wheels.map((wheel, index) => `Wheel ${index + 1}`).join(', ')}`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
