/*
Functions - Arrow & Concise Functions
 */

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

/*
Functions - Concise Functions
Javascript provides several ways to refactor arrow function syntax.
The most condensed form of the function is known as concise body.

Functions that take only a single parameter do not need the parameter to be
condensed within a parenthesis. However, if a function takes zero or multiple parameters
then parenthesis is required.
 */

// Zero Parameters
const functionName = () => {};

// One Parameter
const functionName = paramOne => {};

// Two or More Parameters
const functionName = (paramOne, paramTwo) => {};

/*
A function body composed of a single-line block does not need curly braces.
Without the curly braces, whatever that line evaluates will be automatically returned.
The contents of the block should immediately follow the arrow => and the return
keyword can be removed.
This is referred to as implicit return.
 */

// Single-Line Block
const sumNumbers = number => number + number;

// Multi-Line Block
const sumNumbers = number => {
    const sum = number + number;
    return sum; // Return Statement
}

// So if we have a function:
const squareNum = (num) => {
    return num * num;
}

// We can refactor the function to:
const squareNum = num => num * num;

/*
Notice the following changes:
~ The parentheses around num have been removed, since it has a single parameter.
~ The curly braces have been removed since the function consists of a single-line block.
~ The return keyword has been removed since the function consists of a single-line block.
 */

const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false;
}

// Would change to:

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
