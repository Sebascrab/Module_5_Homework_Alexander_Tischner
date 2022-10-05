

// function for current date in header:
function currentDate() {
    let todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(todaysDate);
}
setInterval(currentDate, 1000);

// function for scheduler
let currentHour = new Date().getHours();
console.log(currentHour)
// for loop to set up blocks and hours
for (let i = 8; i < 18; i++) {
    // setting up colors for past, future, present
    let colorKey = '';
    if (i < currentHour) {
        colorKey = 'past'
    } else if (i === currentHour) {
        colorKey = 'present'
    } else {
        colorKey = 'future'
    } 
    // setting up hour display out of 24hr time
    let hourDisplay = '';
        if (i < 12) {
            hourDisplay = i+'am';
        } else if (i === 12) {
            hourDisplay = i+'pm'
        } else {
            hourDisplay = i-12+'pm'
        }

        // using Jquery to add html for rows: time, description, and save button
    let row = $('<div>').addClass('row').attr('id', i);
    let hour = $('<div>').addClass('col-2 hour').text(hourDisplay);
    let textArea = $('<textarea>').addClass('col-8 ' + colorKey).val(localStorage.getItem(i))
    let saveBtn = $('<button>').addClass('col-2 btn saveBtn').attr('id', i).click(function() {
       let hourKey = $(this).attr('id')
    //    saving description to local storage
       let activity = $(this).siblings('.col-8').val()
       localStorage.setItem(hourKey, activity)
    })
    let icon = $('<i>').addClass('fas fa-save')
    $('.container').append(row.append(hour,textArea,saveBtn.append(icon)))
}

