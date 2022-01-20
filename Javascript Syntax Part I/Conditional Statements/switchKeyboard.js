// The Switch Keyboard
// How to check multiple statements, variables, or conditions without using large amount of else if statements

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case 'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.');
        break;
}