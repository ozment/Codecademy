const getSleepHours = day => {
    switch (day) {
        case 'mon':
            return 8;
        case 'tue':
            return 8;
        case 'wed':
            return 8;
        case 'thu':
            return 8;
        case 'fri':
            return 8;
        case 'sat':
            return 8;
        case 'sun':
            return 8;
        default:
            break;
    }
};
// console.log(getSleepHours('tuesday'));

const getActualSleepHours = () => {
    actualSleepHours = getSleepHours('mon') + getSleepHours('tue') + getSleepHours('wed') + getSleepHours('thu') + getSleepHours('fri') + getSleepHours('sat') + getSleepHours('sun');
    return actualSleepHours;
};

const getIdealSleepHours = () => {
    const idealHours = 10;
    return idealHours * 7;
};


console.log('Actual Sleep Hours: ' + getActualSleepHours());
console.log('Ideal Sleep Hours: ' + getIdealSleepHours());


const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You are getting enough sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You are getting more than ideal sleep!');
    } else {
        console.log('You are getting less than ideal sleep!');
    } if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours(s) less sleep than you needed this week. Get some rest.');
    }
};

calculateSleepDebt();