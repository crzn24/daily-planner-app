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
var exactHour = moment().hours();

// function timeCheck() {   

// }


// how to get hours for each time block
// id class name or data

var rowTime = $(".time-block");
console.log(rowTime);

rowTime.each(function() {
    var timeBlockHour = parseInt($(this).attr("id"))

if (timeBlockHour < exactHour) {
    $(this).addClass("past");
} else if (timeBlockHour === exactHour) {
    $(this).addClass("present");
} else {
    $(this).addClass("future");
}
})

// function to change classes of the time blocks?




// event listener for the save button
// call some function, get value from text area, specific area of text area or Element. parent and children, siblings. previous activity. to traverse. suggested by TA

$(".saveBtn").click(function() {
    console.log("click works");

    var time = $(this).parent().attr("id");
    var textDescription = $(this).siblings(".description").val();

    localStorage.setItem(time, textDescription);
});

$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#13pm .description").val(localStorage.getItem("13pm"));
$("#14pm .description").val(localStorage.getItem("14pm"));
$("#15pm .description").val(localStorage.getItem("15pm"));
$("#16pm .description").val(localStorage.getItem("16pm"));
$("#17pm .description").val(localStorage.getItem("17pm"));


//local storage 
// need to call local storage twice, display data first, other to save data

