/*
      We’ve seen blocks used before in functions and if statements.
      A block is the code found inside a set of curly braces {}.
      Blocks help us group one or more statements together and serve as
      an important structural marker for our code.

      A block of code could be a function, like this:
 */

const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // blue
}

// Notice that the function body is actually a block of code.

// Observe the block in an if statement:
if (dusk) {
    let color = 'pink';
    console.log(color); // pink
}

// Block scope works like this:

const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // blue
};

logSkyColor(); // blue
console.log(color); // ReferenceError