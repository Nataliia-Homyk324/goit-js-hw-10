import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import icon from "../img/octagon.png";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



let userSelectedDate;
let startButton = document.querySelector("[data-start]"); 
let timerFieldDays = document.querySelector("[data-days]");
let timerFieldHours = document.querySelector("[data-hours]");
let timerFieldMinutes = document.querySelector("[data-minutes]");
let timerFieldSeconds = document.querySelector("[data-seconds]");
let input = document.querySelector(".inp");


startButton.disabled = true;
startButton.classList.add('inactive');
startButton.classList.remove('active');
input.disabled = false;

let timerId = null;


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
        messageColor: "	#fff",
        backgroundColor:"#ef4040",
        title: "Error",
        titleSize: 16,
        titleColor: "#fff",
        iconUrl: icon,
        iconColor:"#fff",
      })
      startButton.disabled = true;
      startButton.classList.remove("active");
      startButton.classList.add("inactive");
    } else {
      startButton.disabled = false;
      startButton.classList.remove("inactive");
      startButton.classList.add("active");
    }
  },
};

 
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// time formatting
function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function onTimerStart() {
  const selectedDate = flatp.selectedDates[0];
  timerId = setInterval(() => {
    const startTime = new Date();
    const countdown = selectedDate - startTime;
    startButton.disabled = true;
    input.disabled = true;
    if (countdown < 0) {
      clearInterval(timerId);
      input.disabled = false;
      startButton.disabled = false;
      return;
    }
    updateTimerFace(convertMs(countdown));
  }, 1_000);
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  timerFieldDays.textContent = addLeadingZero(days);
  timerFieldHours.textContent = addLeadingZero(hours);
  timerFieldMinutes.textContent = addLeadingZero(minutes);
  timerFieldSeconds.textContent = addLeadingZero(seconds);
}

const flatp = flatpickr("#datetime-picker", options); 
startButton.addEventListener("click", onTimerStart);









