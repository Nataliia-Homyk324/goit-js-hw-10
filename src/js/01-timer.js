import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import icon from "../img/octagon.png";

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
    //  console.log(userSelectedDate);
    
     if (userSelectedDate < new Date()) {
      iziToast.error({
        message: "Please choose a date in the future",
        width: 300, height: 64, position: "topRight",
        timeout: 5000, closeOnEscape: true,
        messageSize: 16,
        messageColor: '	#fff',
        backgroundColor: '#ef4040',
        title: 'Error',
        titleSize: 16,
        titleColor: '	#fff',
        iconUrl: icon,
        iconColor:"#fff",
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

// flatpickr("#datetime-picker", options); 

console.log(userSelectedDate);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}











