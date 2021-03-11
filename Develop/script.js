//Reference variables
var daytimeEl = document.getElementById("currentDay");
var timeOfDayEl = document.getElementById("work-hour");
var textFieldEl = document.getElementById("text-field");
var saveBtn = document.getElementById("save-btn");
var plannerContainer = $("#time-container");
var workHoursIndex = 0;
//var timeEl;
//var textEl;
//var saveBtnEl;


//Displays the day of the week and date on the page
var timeInterval = setInterval(function () {
    // update the page with the new moment
    var time = moment().format("dddd, MMMM Mo");
    daytimeEl.textContent = time;
})


function generatePlanner() {

}

generatePlanner();



//var projectBtn = document.getElementById(“add-project-btn”);


//function addProject(event) {
//}

//projectBtn.addEventListener(‘click’, addProject);
