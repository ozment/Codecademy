// Write your function here:

const canIVote = age => {
    if (age === 18 || age > 18) {
        return true;
    } else if (age < 18) {
        return false;
    }
}




// Uncomment the line below when you're ready to try out your function
console.log(canIVote(18)); // Should print true

// We encourage you to add more function calls of your own to test your code!
