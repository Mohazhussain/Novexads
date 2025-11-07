const tg = "https://t.me/+1fSGUAGe9GoxNzk9";  // Telegram redirect link

// Timer
const circle = document.querySelector(".progress-bar");
const timerText = document.getElementById("timerText");
const r = 30, circ = 2 * Math.PI * r;
circle.style.strokeDasharray = circ;

function setProgress(t) {
  circle.style.strokeDashoffset = circ * (1 - t / 15);
}

let t = 15;
const countdown = setInterval(() => {
  t--;
  timerText.textContent = t;
  setProgress(t);
  if (t <= 0) {
    clearInterval(countdown);
    fbq("track", "Lead");
    window.location.href = tg;
  }
}, 1000);

document.getElementById("joinBtn").addEventListener("click", () => {
  fbq("track", "Lead");
  window.location.href = tg;
});

