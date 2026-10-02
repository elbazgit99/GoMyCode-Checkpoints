// Function to calculate vectors v1 and v2
function dot_product(v1, v2) {
     let ps = 0;
 
     // Use a loop 
     for (let i = 0; i < v1.length; i++) {
         ps += v1[i] * v2[i]; 
     }
 
     return ps;  
 }
 
 function checkOrthogonality(vectors) {
     let result = "";  
 
     // Use a nested loop to check each pair of vectors
     for (let i = 0; i < vectors.length; i++) {
         for (let j = i + 1; j < vectors.length; j++) {
             // Get the dot product of vectors i and j
             let ps = dot_product(vectors[i], vectors[j]);
 

             if (ps === 0) {
                 result += `Vectors ${i + 1} and ${j + 1} are orthogonal.\n`;
             } else {
                 result += `Vectors ${i + 1} and ${j + 1} are not orthogonal. Dot Product = ${ps}\n`;
             }
         }
     }
 
     return result;
 }
 

 const vectors = [
     [1, 2, 3], 
     [4, 5, 6],  
     [-1, -2, -3], 
     [7, 8, 9]   
 ];
 

 const result = checkOrthogonality(vectors);
 document.getElementById("result").innerText = result;
 