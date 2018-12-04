# Practice: Overly Excited
For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.

 You can try it out immediately by clicking in the Console panel, and typing console.log("Hello, world!"), and then pressing your return key.

# Practice: Stacking Words
The learning objects of this exercise is to use iteration and string concatenation

Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

Example output:

The

The walrus

The walrus danced

The walrus danced through

The walrus danced through the

The walrus danced through the trees

The walrus danced through the trees in

The walrus danced through the trees in the

The walrus danced through the trees in the light

The walrus danced through the trees in the light of

The walrus danced through the trees in the light of the

The walrus danced through the trees in the light of the moon ...

# Practice: Some words are more exciting than others

The learning objective of this exercise is to use the JavaScript if statement inside a loop to do one operation when a certain conditions is true, and a different operation if that condition is false.

Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

# Practice: Function Arguments
The learning objective of this exercise is to practice defining and using function arguments.

Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// I want to use a question mark
addExcitement(sentence, "?");
Example output:

The

The walrus

The walrus danced

The walrus danced through?

The walrus danced through? the

The walrus danced through? the trees

The walrus danced through? the trees in?

etc..