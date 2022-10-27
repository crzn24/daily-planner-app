// Important DOM elements
var dateDisplayEl = $('#currentDay')




// displays the date in header
function displayDate() {
    var rightNow = moment().format('dddd, MMM Do, YYYY');
    dateDisplayEl.text(rightNow);
    console.log("what day is it?")
  }

displayDate();


// function to check time?


// function to change classes of the time blocks?



// event listener for the save button


//local storage 
