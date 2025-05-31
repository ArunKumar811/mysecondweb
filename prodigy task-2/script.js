let startTime, updatedTime, difference, timerInterval;
let isRunning = false;
let display = document.getElementById("display");

function timeToString(time) {
  let ms = time % 1000;
  let totalSeconds = Math.floor(time / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return (
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0') + ':' +
    String(ms).padStart(3, '0')
  );
}

function startStop() {
  if (!isRunning) {
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(() => {
      updatedTime = new Date().getTime();
      difference = updatedTime - startTime;
      display.innerText = timeToString(difference);
    }, 10);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timerInterval);
  isRunning = false;
}

function reset() {
  clearInterval(timerInterval);
  difference = 0;
  isRunning = false;
  display.innerText = "00:00:00:000";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (isRunning) {
    let li = document.createElement("li");
    li.innerText = display.innerText;
    document.getElementById("laps").appendChild(li);
  }
}