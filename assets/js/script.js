// Important DOM elements
dateDisplayEL = $('#currentDay')




// handles displaying the date
function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplayEl.text(rightNow);
  }

displayDate();






