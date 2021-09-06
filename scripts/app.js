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

inputIdEl.addEventListener("focus", () => {
  joinBtn.style.display = "inline";
  if (inputIdEl.value === "") {
    joinBtn.disabled = true;
  }
});

inputIdEl.addEventListener("focusout", () => {
  if (inputIdEl.value === "") {
    joinBtn.style.display = "none";
  }
});

inputIdEl.addEventListener("keyup", () => {
  if (inputIdEl.value !== "") {
    joinBtn.style.display = "inline";
    joinBtn.disabled = false;
  } else {
    joinBtn.disabled = true;
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

// handle create meeting
const createBtn = document.querySelector(".create-meet");
const optsEl = document.querySelector(".option-list");

createBtn.addEventListener("click", () => {
  optsEl.classList.add("active");
});

window.addEventListener("mouseup", (e) => {
  if (e.target !== optsEl && e.target.parentNode !== optsEl) {
    optsEl.classList.remove("active");
  }
});

//handle modal create later meeting
const laterMeetBtn = document.querySelector("#later-meet-btn");
laterMeetBtn.addEventListener("click", () => {
  setTimeout(() => {
    optsEl.classList.remove("active");
  }, 0);
  modalEl.classList.add("active-later-meet");
});

function closeLaterMeet() {
  modalEl.classList.remove("active-later-meet");
}


