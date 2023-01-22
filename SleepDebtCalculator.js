// Determining how many hours per day of week is slept. Creating a single function for all the days.
const getSleepHours = day => {
    // Make sure the input entered is not case sensitive.
    day = day.toLowerCase();
    // Days and hours slept per week.
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 9;
    } else if (day === 'wednesday') {
        return 8.5;
    } else if (day === 'thursday') {
        return 10;
    } else if (day === 'friday') {
        return 8;
    } else if (day === 'saturday') {
        return 11
    } else if (day === 'sunday') {
        return 12;
    } else {
        return 'Uknown day';
    }
};

// Function to determine the total sleep hours that were slept.
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// Function to determine prefered sleep hours.
const getIdealSleepHours = idealHours => idealHours *7;

// Function to determine sleep debt
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours ();
    const idealSleepHours = getIdealSleepHours (8);

    // Determining differences in actual and ideal sleep hours
    if (actualSleepHours === idealSleepHours) {
        console.log(`You've gotten ${idealSleepHours} hours of sleep this week, this is your ideal amount. Congratulations!`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You\'ve gotten ' + (actualSleepHours - idealSleepHours) + 'hours more sleep this week. You should be full of energy!');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You\'ve gotten ' + (idealSleepHours - actualSleepHours) + ' hours less sleep this week. You should go take a nap!');
    } else {
        console.log('Somethings wrong, I am sleepy, sorry!');
    }
};

// Starts calculation
calculateSleepDebt()