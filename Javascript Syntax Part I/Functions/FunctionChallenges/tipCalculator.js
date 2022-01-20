// Write your function here:
/*

Create a function, tipCalculator(), that has two parameters,
 a string representing the quality of the service received and
 a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20

 */
function tipCalculator(quality, total) {
    switch (quality) {
        case 'bad':
            return (0.05 * total); // 5%
        case 'ok':
            return (0.15 * total); // 15%
        case'good':
            return (0.20 * total); // 20%
        case 'excellent':
            return (0.30 * total); // 30%
        default:
            return (0.18 * total); // 18%
            break;
    }
};





// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)); //should return 20
console.log(tipCalculator('bad', 100));

// We encourage you to add more function calls of your own to test your code!
