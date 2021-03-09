var daytimeEl = document.getElementById("currentDay");
var plannerContainer = $("#time-container")
var timeEl;
var textEl;
var saveBtnEl;


var workHours = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
];


var timeInterval = setInterval(function () {
    // update the page with the new moment
    var time = moment().format("dddd, MMMM Mo");
    daytimeEl.textContent = time;
})

function generatePlanner() {
    for (var i = 0; i < workHours.length; i++) {
        var workHoursEl = $("<li>").addClass("row");
        var timeEl = $("<p>").addClass("hour").text(workHours[i]);
        var textEl = $("<input>").attr({ type: 'text', id: 'work-description', name: 'text-input' }).addClass("description").addClass("time-block");
        var saveBtnEl = $("<button>").addClass("saveBtn");
        workHoursEl.append(timeEl).append(textEl).append(saveBtnEl);
}
    plannerContainer.append(workHoursEl);
}




//var projectBtn = document.getElementById(“add-project-btn”);






//function addProject(event) {
//}




//projectBtn.addEventListener(‘click’, addProject);
generatePlanner();