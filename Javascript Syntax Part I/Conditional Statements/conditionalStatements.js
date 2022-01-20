// Conditional Statements

if (true) {

}

/** Inside the parenthesis (), a condition is provided that evaluates to true or false (boolean)
 * If the condition is True, the code inside executes.
 * If the condition is False, it won't.
 */

bool = true;
if (bool){
    console.log('1');
}

bool = false;
if (bool){
    console.log('1');
}
/** Condition Statements Continued
 *
 *      Intro to 'else' statements
 *
 *
 */

let sale = true;
sale = false;

if (sale) {  // Javascript 'if' statements only executes if evaluates to a True statement.
             // If not 'truthy' statement, it won't execute.
   console.log('Time to buy!');
} else {  // Block is only executed if the if statement fails
    console.log('Time to wait for a sale.');
}

