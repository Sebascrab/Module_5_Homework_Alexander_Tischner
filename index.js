// Global Declerations

// total amount of hours available
let tHours = 24;
// starts day off at 0700
let startDay = moment().startOf('day').add(6, 'h');
// current hour time
let rightNow = moment().format('H');   
// past present future items
let time;
// time-block set up
let timeBlock;




// function for current date in header:

function currentDate() {
    let todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(todaysDate);
}
currentDate();

// setting up the time blocks 
function setUpTable() {
    for (let hour = 0; hour < tHours; hour++ ) {
        let present = hour + 12;
        timeBlock = startDay.add(1,'h').format('HH:mm: A');

        // setting up colors based on past present and future
        if (rightNow < present) {
            time = 'past';
        } else if (rightNow > present) {
            time = 'future';
        } else {
            rightNow ='present'
        }


    }


}

setUpTable();















// if (rightNow < present) {
//             time = 'past';
//         } else if (rightNow > present) {
//             time = 'future';
//         } else {
//             rightNow ='present'
//         }









