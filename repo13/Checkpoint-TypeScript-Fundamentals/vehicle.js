// 2. Implement a class named Car that implements the Vehicle interface
var Car = /** @class */ (function () {
    // Properties are automatically created and assigned by the constructor's public/private modifiers
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        // The constructor initializes the make, model, and year properties.
        // No explicit assignments are needed here because of the 'public' keyword in constructor parameters.
    }
    // Implement the start method as required by the Vehicle interface
    Car.prototype.start = function () {
        console.log("Car engine started"); // Logs "Car engine started" to the console
    };
    return Car;
}());
// 3. Create an instance of the Car class
// Initialize it with some values for make, model, and year.
var myCar = new Car("Toyota", "Camry", 2023);
// 4. Call the start method on the instance of the Car class
// This will verify that it logs the appropriate message to the console.
console.log("My car details: ".concat(myCar.make, " ").concat(myCar.model, " (").concat(myCar.year, ")"));
myCar.start();
// You can also demonstrate a generic vehicle function (optional)
function startVehicle(vehicle) {
    console.log("Attempting to start a ".concat(vehicle.make, " ").concat(vehicle.model, "..."));
    vehicle.start();
}
console.log("\n--- Using a generic vehicle starter function ---");
startVehicle(myCar);
// Example of another car instance
var anotherCar = new Car("Honda", "Civic", 2020);
console.log("\nAnother car details: ".concat(anotherCar.make, " ").concat(anotherCar.model, " (").concat(anotherCar.year, ")"));
anotherCar.start();
startVehicle(anotherCar);
