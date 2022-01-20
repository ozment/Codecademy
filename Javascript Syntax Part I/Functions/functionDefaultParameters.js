/*
Function - Default Parameters

One of the features added in ES6 is the ability to use default parameters.
Default parameters allow parameters to have a predetermined value in case
there is no argument passed into the function or if the argument is undefined when called.

When an argument is passed through, it overrides the default parameters, as seen below:
 */

// Example Snippet
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

// Another Example Snippet
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

makeShoppingList();