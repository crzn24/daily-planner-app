// Important DOM elements
var dateDisplayEl = $('#currentDay')




// displays the date in header
function displayDate() {
    var rightNow = moment().format('dddd, MMM Do, YYYY');
    dateDisplayEl.text(rightNow);
    console.log("what day is it?")
  }

displayDate();


// function to check time (hour of the day) and 
var exactHour = moment().hour();

function timeCheck() {
    

}


// how to get hours for each time block
// id class name or data

var rowTime = ".time-block"




// function to change classes of the time blocks?

if (rowTime < exactHour) {
    addClass("past");
} else if (rowTime === exactHour) {
    addClass("present");
} else {
    addClass("future");
}



// event listener for the save button
// call some function, get value from text area, specific area of text area or Element. parent and children, siblings. previous activity. to traverse 






//local storage 
// need to call local storage twice, display data first, other to save data