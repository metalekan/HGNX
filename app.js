const dayOfTheWeek = document.getElementById("dayOfTheWeek");
const currentUTCTime = document.getElementById("currentTime");

const loadTime = () => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let time = new Date();
  let day = time.getDay();
  let h = time.getHours();
  let hour = h % 12;
  hour = hour ? hour : 12;
  let minute = time.getMinutes();

  let timeFormat = hour >= 12 ? "AM" : "PM";

  currentDayOfTheWeek.innerText = daysOfTheWeek[day];
  currentUTCTime.innerText = `${hour} : ${minute} ${timeFormat}`;
};

loadTime();