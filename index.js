







// function for current date in header:

function currentDate() {
    let todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(todaysDate);
}





























// function calls:
currentDate();