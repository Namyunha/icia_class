const clock = document.querySelector("#clock");
const today = document.querySelector("#today");

// console.log(year);
// console.log(month);
// console.log(day);

function getClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

function getDay() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  today.innerText = `${year}년 ${month}월 ${day}일`;
}

getClock();
setInterval(getClock, 1000);
getDay();
