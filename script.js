"use strict";

let s = false;

const form = document.getElementById("form");

const task = document.getElementById("task");

const desc = document.getElementById("desc");

const table = document.getElementById("table");

const duration = document.getElementById("duration");

let hr = 0;
let min = 0;
let sec = 0;

const changeTime = () => {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
  }
  if (min >= 60) {
    min = 0;
    hr++;
  }

  document.getElementById("section").innerHTML = `${hr
    .toString()
    .padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
};

const startButton = document.getElementById("start");

let running = false;
let interval;
startButton.addEventListener("click", () => {
  if (!running) {
    running = true;

    startButton.innerText = "Stop";
    task.setAttribute("disabled", true);
    desc.setAttribute("disabled", true);
    task.style.borderColor = "red";
    desc.style.borderColor = "red";
    startButton.style.borderLeft = "20px solid red";
    document.getElementById("section").style.border = "2px solid red";
    interval = setInterval(changeTime, 1000);
  } else {
    running = false;
    clearInterval(interval);
    if (task.value.length <= 0 || desc.value.length < 1) {
      task.value = "-";
      desc.value = "-";
    }

    if (!s) {
      s = true;
      table.style.visibility = "visible";
      document.getElementById("empty").innerHTML = "";
    }

    table.innerHTML += `<tr>
      
      <td>${task.value}</td>
      <td>${desc.value}</td>
      <td>${hr.toString().padStart(2, "0")} Hr: ${min
      .toString()
      .padStart(2, "0")} Min: ${sec.toString().padStart(2, "0")} Sec</td>
      </tr>
      `;

    task.removeAttribute("disabled");
    desc.removeAttribute("disabled");
    task.style.borderColor = "black";
    desc.style.borderColor = "black";
    task.value = "";
    desc.value = "";
    document.getElementById("section").style.border = "2px solid transparent";
    startButton.innerText = "Start";
    startButton.style.borderLeft = "20px solid green";
    document.getElementById("section").innerHTML = "00:00:00";
    sec = 0;
    min = 0;
    hr = 0;
  }
});

// const heading = document.getElementById("hhh");

// heading.addEventListener("click", () => {
//   heading.classList.add("head2");
//   heading.innerText = "circle";
// });

// const button = document.getElementById("add");

// button.addEventListener("click", () => {
//   button.classList.add("style-button");
//   button.innerText = "Clicked";
// });

// const submiHandler = (e) => {
//   e.preventDefault();
//   if (task.value.length <= 0 || desc.value.length < 1 || duration.value < 1) {
//     alert("Fill All Values");
//     return;
//   }

//   table.innerHTML += `<tr>

//   <td>${task.value}</td>
//   <td>${desc.value}</td>
//   <td>${duration.valueAsNumber}</td>
//   </tr>
//   `;

//   task.value = "";
//   desc.value = "";
//   duration.value = "";
// };

// console.log(submiHandler);

// form.addEventListener("submit", submiHandler);
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toJSON());
