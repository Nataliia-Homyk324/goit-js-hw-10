import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;// Declaring the variable outside of onClose() method
let startButton = document.querySelector(".start"); 

startButton.disabled = true;
startButton.classList.add('inactive');
startButton.classList.remove('active');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
     userSelectedDate = selectedDates[0];
     console.log(userSelectedDate);
    if (userSelectedDate < new Date()) {
      iziToast.error({
        message: "Please choose a date in the future",
        width: 300, height: 64, position: "topRight",
        timeout: false, closeOnEscape: true,
        messageSize: 16,
        messageColor: '	#000000',
        backgroundColor: '#FF4500',
        title: 'Error',
        titleSize: 16,
        titleColor: '	#000000',
        iconColor: "#fff",
      })
      startButton.disabled = true;
      startButton.classList.remove('active');
      startButton.classList.add('inactive');
    } else {
      startButton.disabled = false;
      startButton.classList.remove('inactive');
      startButton.classList.add('active');
    }
  },
};

flatpickr("#datetime-picker", options); 









