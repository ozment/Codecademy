/* Codecademy Functions Quiz */

const sleepTimer = alarm => console.log('My alarm is set for: ' + alarm);

sleepTimer('8:30AM');

/*
    What is wrong with the code below?
 */

const greeting = () => {       //Missing a parentheses () between = & =>
    console.log('Hello Programmer!');
};

/*
    Which of the following is a parameter in the block of code below?
 */

let input = 8;
const controlVal = input / 2 + 3;
const multiplier = (number, phase) => {         // Both number & phase are input but
    const val = number * controlVal + phase;    // only 'number' was listed for
    console.log(val);
};

/*
    Which of the following most accurately descripts the volumeOfCube() function?
 */

function volumeOfCube (side) {
    return side * side * side;
}

volumeOfCube(5);
// Output: 125.

// The above is a function declaration. A function expression requires a variable
// assignment like:

const volumeOfCube() = function() {};


/*
    What will be printed to console?
 */

const eatFruit = (fruit = 'apple') => {
    console.log(`This ${fruit} is delicious!`);
};

eatFruit();  // Results: This apple is delicious!

