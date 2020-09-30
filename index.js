"use strict";

let weekdayNumber = 8;

// if(weekdayNumber == 1) {
//     console.log("Today is Monday");
// } else if(weekdayNumber == 2){
//     console.log("Today is Tuesday");
// } else if(weekdayNumber == 3){
//     console.log("Today is Wednesday");
// } else if(weekdayNumber == 4){
//     console.log("Today is Thursday");
// } else if(weekdayNumber == 5){
//     console.log("Today is Friday");
// } else if(weekdayNumber == 6){
//     console.log("Today is Saturday");
// } else if(weekdayNumber == 7){
//     console.log("Today is Sunday");
// } else {
//     console.error("Number not between 1-7");
// }

switch(weekdayNumber){
    case 1: {
        console.log("Today is Monday");
        break;
    }
    case 2: {
        console.log("Today is Tuesday");
        break;
    }
    case 3: {
        console.log("Today is Wednesday");
        break;
    }
    case 4: {
        console.log("Today is Thursday");
        break;
    }
    case 5: {
        console.log("Today is Friday");
        break;
    }
    case 6: {
        console.log("Today is Saturday");
        break;
    }
    case 7: {
        console.log("Today is Sunday");
        break;
    }
    default: {
        console.error("Number not between 1-7");
    }
}
