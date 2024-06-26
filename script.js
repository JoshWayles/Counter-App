let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0

document.getElementById("increase-btn").addEventListener("click", function () {
  increaseBtn()
})
function increaseBtn() {
  count += 1
  countEl.textContent = count
}

document.getElementById("save-btn").addEventListener("click", function () {
  saveBtn()
})
function saveBtn() {

  total += count
  totalEl.textContent = "Total: " + total

  if (saveEl.textContent === "_") {
    saveEl.textContent = count
    count = 0
    countEl.textContent = count
  }
  else {
    saveEl.textContent = count + " ~ " + saveEl.textContent
    count = 0
    countEl.textContent = count
  }
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();

  let timeNow = ""

  if (m < 10) {
    timeNow = h + ":" + "0" + m;
  }
  else {
    timeNow = h + ":" + m;
  }

  document.getElementById('current-time').textContent = "Current Time: " + timeNow
  setTimeout(startTime, 1000);
}

document.getElementById("time-btn").addEventListener("click", function () {
  saveTime()
})
function saveTime() {

  total += count
  totalEl.textContent = "Total: " + total

  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();

  let timeNow = ""

  if (m < 10) {
    timeNow = h + ":" + "0" + m;
  }
  else {
    timeNow = h + ":" + m;
  }

  if (saveEl.textContent === "_") {
    saveEl.textContent = count + " @ " + timeNow
    count = 0
    countEl.textContent = count
  }
  else {
    saveEl.textContent = count + " @ " + timeNow + " ~ " + saveEl.textContent
    count = 0
    countEl.textContent = count
  }
}
