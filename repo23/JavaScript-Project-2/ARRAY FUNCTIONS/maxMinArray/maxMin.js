let arr = [2,4,6,8,10]

function minMax() {

     let max = Math.max(...arr)
     let min = Math.min(...arr)
     return {max, min}
}
console.log(minMax())