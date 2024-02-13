let count = 0;

// element selector
const countEl = document.querySelector(".count-el");
const incBtn = document.querySelector(".increment-btn");
const decBtn = document.querySelector(".decrement-btn");
const saveBtn = document.querySelector(".save-btn");
const historyEl = document.querySelector(".history-el");
console.log(historyEl);

// increment functionality
// increse the count, disply on screen
incBtn.addEventListener(`click`, function () {
  count++;
  countEl.textContent = count;
});

decBtn.addEventListener(`click`, function () {
  if (count > 0) {
    count--;
    countEl.textContent = count;
  }
});
saveBtn.addEventListener("click", function () {
  // addd this to history el
  historyEl.textContent += " " + count + ",";
});
