let timerEl = document.querySelector(".timer");

setInterval(() => {
  let now = new Date();
  timerEl.innerHTML = `${now.getHours()}:${now.getMinutes()}-Th${
    now.getDay() + 1
  }, ${now.getDate()} thg ${now.getMonth() + 1}`;
}, 1000);

// show dropdown help
let helpEl = document.querySelector("#helps");
let dropdownEl = document.querySelector(".dropdown-menu");
helpEl.addEventListener("click", () => {
  if (dropdownEl.classList.contains("show")) {
    dropdownEl.classList.remove("show");
  } else dropdownEl.classList.add("show");
});

window.addEventListener("mouseup", (e) => {
  if (e.target !== dropdownEl && e.target.parentNode !== dropdownEl) {
    dropdownEl.classList.remove("show");
  }
});

let exclamationEl = document.querySelector("#exclamation");
let modalEl = document.querySelector(".modal");
let feedbackEl = document.querySelector(".feedback");
let overlayEl = document.querySelector(".overlay");

exclamationEl.addEventListener("click", () => {
  modalEl.classList.add("active-feedback");
});

function closeModal() {
  modalEl.classList.remove("active-feedback");
}

function closeSetting() {
  modalEl.classList.remove("active-setting");
}

let settingEl = document.querySelector("#setting");

settingEl.addEventListener("click", () => {
  modalEl.classList.add("active-setting");
});

const inputIdEl = document.querySelector("#input-id");
const joinBtn = document.querySelector("#join-btn");

inputIdEl.addEventListener("keyup", () => {
  if (inputIdEl.value !== "") {
    joinBtn.style.display = "inline";
  } else {
    joinBtn.style.display = "none";
  }
});

// handle slide
let idx = 0;
const leftBtnEl = document.querySelector("#leftBtn");
const rightBtnEl = document.querySelector("#rightBtn");
const slidesEl = document.querySelectorAll(".slide-item");
const signs = document.querySelectorAll(".sign div");

function removeAnother(list, className) {
  list.forEach((item) => {
    item.classList.remove(className);
  });
}

rightBtnEl.addEventListener("click", () => {
  idx += 1;
  leftBtnEl.disabled = false;

  if (idx === slidesEl.length - 1) {
    rightBtnEl.disabled = true;
  }

  removeAnother(slidesEl, "active");
  slidesEl[idx].classList.add("active");
  removeAnother(signs, "active");
  signs[idx].classList.add("active");
});

leftBtnEl.addEventListener("click", () => {
  idx -= 1;
  rightBtnEl.disabled = false;

  if (idx === 0) {
    leftBtnEl.disabled = true;
  }

  removeAnother(slidesEl, "active");
  slidesEl[idx].classList.add("active");

  removeAnother(signs, "active");
  signs[idx].classList.add("active");
});
