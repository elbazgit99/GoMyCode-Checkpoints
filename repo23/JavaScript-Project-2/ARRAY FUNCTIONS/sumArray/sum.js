

let sum = null

function SumFunc(numbers) {
     numbers.forEach((num) => {
          sum += num
     })
     return sum
}
console.log(SumFunc([10,10,10]))
