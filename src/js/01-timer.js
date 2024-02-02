import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let userSelectedDate;// Declaring the variable outside of onClose() method
let startButton = document.getElementById("start-button"); // Assuming the start button has an id of "start-button"

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
     userSelectedDate = selectedDates[0];
    console.log(userSelectedDate);
    if (userSelectedDate < new Date()) {
      alert("Please choose a date in the future");
      startButton.disabled = true; // Disabling the start button
    } else {
      startButton.disabled = false; // Enabling the start button
    }
  },
};

flatpickr("#datetime-picker", options); 






