/* Functions - Return Statements

To pass back information from the function call, we use a return statement.
To create a return statement, we use the return keyword followed by the value that we wish to return.
If the value is omitted, undefined is returned instead.

 */

function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);