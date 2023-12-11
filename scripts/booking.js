/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let selectedDays = [];
let totalCost = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleDayClick(day) {
    const dayButton = document.getElementById(day);

    if (!selectedDays.includes(day)) {
        selectedDays.push(day);
        dayButton.classList.add('clicked');
    } else {
        const index = selectedDays.indexOf(day);
        selectedDays.splice(index, 1);
        dayButton.classList.remove('clicked');
    }

    calculateCost();
}

    document.getElementById('monday').addEventListener('click', function () {
        handleDayClick('monday');
    });
    document.getElementById('tuesday').addEventListener('click', function () {
        handleDayClick('tuesday');
    });
    document.getElementById('wednesday').addEventListener('click', function () {
        handleDayClick('wednesday');
    });
    document.getElementById('thursday').addEventListener('click', function () {
        handleDayClick('thursday');
    });
    document.getElementById('friday').addEventListener('click', function () {
        handleDayClick('friday');
    });

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    selectedDays.forEach(function(day) {
        document.getElementById(day).classList.remove('clicked');
    });

    selectedDays = [];
    dailyRate = 35;
    changeRate(35);
    calculateCost();
}

document.getElementById('clear-button').addEventListener('click', clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeRate(rate) {
    dailyRate = rate;
    document.getElementById('half').classList.toggle('clicked', rate === 20);
    document.getElementById('full').classList.toggle('clicked', rate === 35);
    calculateCost();
}

document.getElementById('half').addEventListener('click', function() {
    changeRate(20);
});
document.getElementById('full').addEventListener('click', function() {
    changeRate(35);
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    totalCost = dailyRate * selectedDays.length;
    document.getElementById('calculated-cost').innerText = totalCost;
}
