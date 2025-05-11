function testPrime(num) {
     if (num <= 1) {
          return false
     }
     for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
               return false
          }
     }
     return true
}
console.log(testPrime(5))
console.log(testPrime(6))