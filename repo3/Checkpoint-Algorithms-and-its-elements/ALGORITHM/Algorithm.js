function GoMyCode(sentence) {
    let Jadara = 0;
    let Souss = 0;
    let MyCode = 0;
    const Foundation = "Foundation";
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        Jadara++;

        if (Foundation.indexOf(char) !== -1) {
            MyCode++;
        }

        if (char !== ' ' && char !== '.') {
            if (!inWord) {
                Souss++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }

    console.log("Sentence length: " + Jadara);
    console.log("Number of words: " + Souss);
    console.log("Number of characters in 'Foundation': " + MyCode);
}

let sentence = prompt("Enter a sentence: ");
GoMyCode(sentence);
