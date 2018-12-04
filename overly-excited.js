let addExcitement = function() {
    console.log("I'm so excited, and I just can't hide it! I'm about to lose control, and I think I like it!")
}

console.log("Hello, world!");
addExcitement();

// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
addExcitement = function(theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
    buildMeUp += (`${sentence[i]} `);
    console.log(buildMeUp);
        // Print buildMeUp to the console
    }

}

// Invoke the function and pass in the array
addExcitement(sentence);

addExcitement = function(theWordArray) {
    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        
    // If the current value of `i` divided by 3 has no remainder, add an exclamation point to the end of the word and then concatenate it to `buildMeUp`.}
    if (i % 3 === 0) {
        buildMeUp += (`${sentence[i]}! `);
    }

    // Otherwise, just concatenate the word itself.
        
    else {
        buildMeUp += (`${sentence[i]} `);
    }

    // Print buildMeUp to the console
    console.log(buildMeUp);
    }
}

addExcitement(sentence);

