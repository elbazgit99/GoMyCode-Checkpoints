function FindTheSum(set1, set2) {
    let sum = 0;

    // Loop  in the  set1
    for (let i = 0; i < set1.length; i++) {
        let isDistinct = true;

        for (let j = 0; j < set2.length; j++) {
            if (set1[i] === set2[j]) {
                isDistinct = false;
                break;
            }
        }

        if (isDistinct) {
            sum += set1[i];
        }
    }

    // Loop in the set2
    for (let i = 0; i < set2.length; i++) {
        let isDistinct = true;

        for (let j = 0; j < set1.length; j++) {
            if (set2[i] === set1[j]) {
                isDistinct = false;
                break;
            }
        }

        if (isDistinct) {
            sum += set2[i];
        }
    }

    return sum; // Return the final sum
}

// Example sets
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

// Call the function to calculate the sum 
const result = FindTheSum(set1, set2);

// result 
document.getElementById("result").innerText = `Sum of distinct elements: ${result}`;
