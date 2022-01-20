// Arrays //


/*
    Organizing and storing data is a foundational concept of programming.
    One way we organize data in real life is by making lists. Let's make on here:
 */

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle']; // Define List
console.log(newYearsResolutions); // Print List

/*
    Arrays are Javascripts ways of making lists. Arrays can store any data types;
    Including strings, numbers, and booleans.
    Like lists, arrays are ordered, meaning each item has a numbered position.
    Heres an array of the concepts we'll cover:
 */

let concepts = ['creating arrays', 'array structures', 'array manipulation'];
console.log(concepts);


// Create an Array //


/*
      Array Literal
    One way we can create an array is to use an array literal.
    An array literal creates an array wrapping items in square brackets [].
    Remember from the previous exercide, arrays can store any data type
    -- We can have an array that hold all the same data types or that holds different data types.
 */

let arrayDifferentElements = ['element example', 10, true]; // string, int, boolean
console.log(arrayDifferentElements);

/*
    Lets take a closer look at the syntax in the array example:
    - The array is represented by the square brackets [] and the content inside.
    - Each content item inside an array is called an element.
    - There are three different elements inside the array.
    - Each element inside the array is a different data type.
    - An array can be saved to a variable. As in previous examples above!
 */

// Accessing Elements in an Array //
/*
    Each element in an array has a number position known as its index. We can access individual items using their
    index, which is similar to referencing an item in a list based on the items position.

    Arrays in javascript are zero-indexed meaning the positions start counting from 0, not 1.
    Therefore, the first item in an array will be at position 0.
    Heres how to access the array elements:
    - cities is an array that has three elements
    - we're using bracket notation, [] with the index after the name of the array to access elements
    - cities[0] will access the element at index 0 in the array cities.
 */

let cities = ['New York', 'Beijing', 'Nairobi'];
console.log(cities[0]);


// You can also access individual characters in a string using bracket notion and the index.
const hello = 'Hello World';
console.log(hello[6]);

// Update Elements

/*
    In the previous exercise, you learned how to access elements inside an array or a string
    by using an index.  Once you have access to an element in a array, you can update its value.
 */

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn'; // Redefined element 3 in the array.
console.log(seasons);

// Arrays w/ let and const

/*
    You may recall that you can declare variables with both the let and const keywords.
    Variables declared with let can be reassigned.
    Variables declared with const cannot be reassigned.
    However, elements in an array declared with const remain mutable.
    Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.
 */

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];  // Changes the whole array to only 'Mayo'
console.log(condiments);

// const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
const utensils = ['Spoon']; // Only way to change a cont array
console.log(utensils);
