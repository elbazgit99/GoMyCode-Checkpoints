let words = ["hamza", "jamal", "ibrahim", "abderrahim"]

function filterArr() {
     
     return words.filter(word => word.length < 6) 
}
console.log(filterArr());
