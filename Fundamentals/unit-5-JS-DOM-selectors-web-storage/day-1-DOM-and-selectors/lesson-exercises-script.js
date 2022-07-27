document.getElementById("header-container").style.background = "green";
let emergencyTasks = document.querySelectorAll(".emergency-tasks h3");
for (i=0; i<emergencyTasks.length;i+=1) {
    emergencyTasks[i].style.background = "purple";
}

document.querySelector(".emergency-tasks").style.background = "orange";

let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (i=0; i<noEmergencyTasks.length;i+=1) {
    noEmergencyTasks[i].style.background = "black";
}

document.querySelector(".no-emergency-tasks").style.background = "yellow";