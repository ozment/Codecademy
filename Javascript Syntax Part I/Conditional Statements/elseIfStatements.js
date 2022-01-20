// We can add more conditions to our if...else with an else if statement.
// You can add as many else if statements as you'd like to make more complex conditional statements
// else if will always come after the if statement and before the last else statement

let season = 'summer';

if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
    console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!')
} else {
    console.log('Invalid season.');
}