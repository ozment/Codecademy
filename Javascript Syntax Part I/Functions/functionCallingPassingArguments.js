/* Calling a Function
As seen previously, a function declaration binds a function to an identifier.
Obviously, this was only declaring and defining the function
The code inside the function run, or executes, only when the function is called.

 */

function sayThanks() {
    console.log('Thank you!');
}

sayThanks();

/* Parameters & Arguments

The sayThanks() function works well, but let’s add the customer’s name in the message.
Add a parameter called name to the function declaration for sayThanks().
Pass through the data when calling the function by including the arguments within parenthesis
 */

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');