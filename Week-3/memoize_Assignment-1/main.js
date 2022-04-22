

/*
const module = (function (a, b) {
    const output = {};
    return (a + b) => {
        if (!result[store_result]);
        return result[store_result];
    };

const  
*/   


function LeapYear(year) {

    //three conditions to find out the leap year
    if (0 == year % 4) {
        console.log(year + ' is a leap year');
    } else if (0 != year % 100) {
        console.log(year + ' is a leap year');
    } else if (0 == year % 400) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

LeapYear(2014);