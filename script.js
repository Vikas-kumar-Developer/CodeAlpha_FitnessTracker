let steps = 0;
let calories = 0;
let water = 0;

const activity = document.getElementById("activity");
const duration = document.getElementById("duration");
const addActivityBtn = document.getElementById("addActivityBtn");

const stepsDisplay = document.getElementById("steps");
const caloriesDisplay = document.getElementById("calories");
const waterDisplay = document.getElementById("water");
const activityList = document.getElementById("activityList");

addActivityBtn.addEventListener("click", function () {

    const selectedActivity = activity.value;
    const minutes = Number(duration.value);

    if (minutes <= 0 || duration.value === "") {
        alert("Please enter a valid duration.");
        return;
    }

    // Calculate fitness data
    if (selectedActivity === "Walking") {
        steps += minutes * 100;
        calories += minutes * 4;
    }
    else if (selectedActivity === "Running") {
        steps += minutes * 150;
        calories += minutes * 10;
    }
    else if (selectedActivity === "Cycling") {
        calories += minutes * 8;
    }
    else if (selectedActivity === "Exercise") {
        calories += minutes * 7;
    }

    // Water estimate
    water += minutes * 0.02;

    // Update display
    stepsDisplay.textContent = steps;
    caloriesDisplay.textContent = calories;
    waterDisplay.textContent = water.toFixed(1) + " L";

    // Remove "No activity" message
    if (activityList.children[0].textContent === "No activity added yet.") {
        activityList.innerHTML = "";
    }

    // Add activity to list
    const li = document.createElement("li");

    li.textContent =
        selectedActivity + " - " + minutes + " minutes";

    activityList.appendChild(li);

    // Clear duration input
    duration.value = "";
});