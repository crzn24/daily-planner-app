// Important DOM elements
var dateDisplayEl = $('#currentDay')


var rightNow = moment().format('dddd, MMM Do, YYYY');

// handles displaying the date in header
function displayDate() {
    dateDisplayEl.text(rightNow);
    console.log("what day is it?")
  }

displayDate();







