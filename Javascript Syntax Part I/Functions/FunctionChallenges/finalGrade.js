// Write your function here:
// midterm, final, homework grades
function finalGrade(mid, fin, hwo) {
    const sum = (mid+fin+hwo);
    const average = sum/3;
    if (average < 0 || average > 100) {
        return 'You have entered an invalid grade.';
    } else if ((mid < 0 || mid > 100) || (fin < 0 || fin > 100) || (hwo < 0 || hwo > 100)) {
        return "You have entered an invalid grade."
    } else {
        if (average >= 0 && average <= 59) {
            return 'F';
        } else if (average >= 60 && average <= 69) {
            return 'D';
        }  else if (average >= 70 && average <= 79) {
            return 'C';
        }  else if (average >= 80 && average <= 89) {
            return 'B';
        }  else if (average >= 90 && average <= 100) {
            return 'A';
        }
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!