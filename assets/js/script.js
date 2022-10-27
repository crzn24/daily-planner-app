// Important DOM elements
var dateDisplayEl = $('#currentDay')




// handles displaying the date in header
function displayDate() {
    var rightNow = moment().format('dddd, MMM Do, YYYY');
    dateDisplayEl.text(rightNow);
    console.log("what day is it?")
  }

displayDate();







