// Global Declerations

// total amount of hours available
let tHours = 12;
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
    for(let i = 0; i < tHours; i++ ) {
        let present = i + 12;
        timeBlock = startDay.add(1,'h').format('HH:mm: a');

        // setting up colors based on past present and future
        if (rightNow < present) {
            time = 'past';
        } else if (rightNow > present) {
            time = 'future';
        } else {
            rightNow ='present'
        }


        var appendBlock = 
            `<div id="hour-${present}" class="row time-block ${time}">
                <div class="col-md-1 hour">${setUpTable}</div>
                <textarea class="col-md-10 description ${time}"></textarea>
                <button class="btn saveBtn col-md-1">
                    <i class="fas fa-save"></i>
                </button>
            </div>`;

        $(".container").append(appendBlock);
    }
}

setUpTable();

























