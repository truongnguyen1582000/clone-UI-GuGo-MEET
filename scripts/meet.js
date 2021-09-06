const inviteBoxEl = document.querySelector(".invite-box");
function closeInviteBox() {
  inviteBoxEl.style.display = "none";
}

const timerEl = document.querySelector(".timer");
setInterval(() => {
  const time = new Date();
  const hour =
    time.getHours().toString().length === 1
      ? "0" + time.getHours()
      : time.getHours();
  const minute =
    time.getMinutes().toString().length === 1
      ? "0" + time.getMinutes()
      : time.getMinutes();
  timerEl.innerText = `${hour}:${minute}`;
}, 1000);

// handle control
const controlsEL = document.querySelectorAll(".control-item button");
const mutedStatusEl = document.querySelector(".status-muted");

for (let i = 0; i < 2; i++) {
  controlsEL[i].addEventListener("click", () => {
    if (i === 0) {
      mutedStatusEl.classList.toggle("muted");
    }
    controlsEL[i].classList.toggle("closed");
  });
}

//handle mute status

// handle present option
const presentOptsEl = document.querySelector(".present-opts");

function showOpts() {
  presentOptsEl.classList.add("active");
}

window.addEventListener("mouseup", (e) => {
  presentOptsEl.classList.remove("active");
  moreOptsEl.classList.remove("active");
});

// more option
const moreOptsEl = document.querySelector("#more-opts");
function showMoreOpts() {
  moreOptsEl.classList.add("active");
}

// handle slide box animation
const btns = document.querySelectorAll(".info-item button");
const slideBoxEl = document.querySelector(".slide-box");
const slideBoxItem = document.querySelectorAll(".slide-box-item");

function removeAnotherBtn() {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function removeAnotherSlide() {
  slideBoxItem.forEach((el) => {
    el.classList.remove("active");
  });
}

btns.forEach((element, idx) => {
  element.addEventListener("click", () => {
    if (slideBoxItem[idx].classList.contains("active")) {
      removeAnotherBtn();
      removeAnotherSlide();
      return closeSlideBox();
    }

    slideBoxEl.classList.add("active");
    removeAnotherBtn();
    btns[idx].classList.add("active");
    removeAnotherSlide();
    slideBoxItem[idx].classList.add("active");
  });
});

function closeSlideBox() {
  slideBoxEl.classList.remove("active");
  removeAnotherBtn();
}

// hanle switcher
const swithBtn = document.querySelector(".switcher");

swithBtn.addEventListener("click", () => {
  swithBtn.classList.toggle("active");
});

//handle chat typing
const inputChatEl = document.querySelector("#chat-value");
const sendMsgBtn = document.querySelector("#send-chat");

inputChatEl.addEventListener("keyup", () => {
  if (inputChatEl.value !== "") {
    sendMsgBtn.classList.add("active");
    sendMsgBtn.disabled = false;
  } else {
    sendMsgBtn.classList.remove("active");
    sendMsgBtn.disabled = true;
  }
});
