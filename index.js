

// function for current date in header:
function currentDate() {
    let todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(todaysDate);
}
setInterval(currentDate, 1000);
let currentHour = new Date().getHours();
console.log(currentHour)
for (let i = 9; i < 18; i++) {
    let colorKey = '';
    if (i < currentHour) {
        colorKey = 'past'
    } else if (i === currentHour) {
        colorKey = 'present'
    } else {
        colorKey = 'future'
    } 
    let hourDisplay = '';
        if (i < 12) {
            hourDisplay = i+'am';
        } else if (i === 12) {
            hourDisplay = i+'pm'
        } else {
            hourDisplay = i-12+'pm'
        }
    let row = $('<div>').addClass('row').attr('id', i);
    let hour = $('<div>').addClass('col-2').text(hourDisplay);
    let textArea = $('<textarea>').addClass('col-8 ' + colorKey).val(localStorage.getItem(i))
    let saveBtn = $('<button>').addClass('col-2 btn btn-primary').attr('id', i).click(function() {
       let hourKey = $(this).attr('id')
       let activity = $(this).siblings('.col-8').val()
       localStorage.setItem(hourKey, activity)
    })
    let icon = $('<i>').addClass('fas fa-save')
    $('.container').append(row.append(hour,textArea,saveBtn.append(icon)))
}

