// 1. Define an interface named Vehicle
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void; // Method that returns void and logs "Engine started"
}

// 2. Implement a class named Car that implements the Vehicle interface
class Car implements Vehicle {
  // Properties are automatically created and assigned by the constructor's public/private modifiers
  constructor(public make: string, public model: string, public year: number) {
    // The constructor initializes the make, model, and year properties.
    // No explicit assignments are needed here because of the 'public' keyword in constructor parameters.
  }

  // Implement the start method as required by the Vehicle interface
  start(): void {
    console.log("Car engine started"); // Logs "Car engine started" to the console
  }
}

// 3. Create an instance of the Car class
// Initialize it with some values for make, model, and year.
const myCar = new Car("Toyota", "Camry", 2023);

// 4. Call the start method on the instance of the Car class
// This will verify that it logs the appropriate message to the console.
console.log(`My car details: ${myCar.make} ${myCar.model} (${myCar.year})`);
myCar.start();

// You can also demonstrate a generic vehicle function (optional)
function startVehicle(vehicle: Vehicle): void {
  console.log(`Attempting to start a ${vehicle.make} ${vehicle.model}...`);
  vehicle.start();
}

console.log("\n--- Using a generic vehicle starter function ---");
startVehicle(myCar);

// Example of another car instance
const anotherCar = new Car("Honda", "Civic", 2020);
console.log(`\nAnother car details: ${anotherCar.make} ${anotherCar.model} (${anotherCar.year})`);
anotherCar.start();
startVehicle(anotherCar);
