"use strict";

// INITIALS
// ---------------------------------------
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreHolder = 5;
let highScoreHolder = 0;
document.querySelector(".again").classList.add("hidden");

// FUNTIONS
// ---------------------------------------
const messageReply = function (message) {
  document.querySelector(".startGuessing").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    messageReply("⛔ No Number, number from 1 to 20");
  } else if (guess === secretNumber) {
    messageReply("🎉 You Got It Right!");
    document.querySelector(".check").classList.add("hidden");
    document.querySelector(".again").classList.remove("hidden");
    document.querySelector("div").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#8199f7";
    document.querySelector(".showCorrectNum").style.width = "15rem";
    document.querySelector("h1").textContent = "🎉 You Got It Right!";
    document.querySelector(".between").classList.add("hidden");
    document.querySelector("input").style.pointerEvents = "none";
    document.querySelector("div").style.pointerEvents = "none";
    document.querySelector("input").style.backgroundColor = "#8199f7";
    if (scoreHolder > highScoreHolder) {
      highScoreHolder = scoreHolder;
      document.querySelector(".highScoreHolder").textContent = highScoreHolder;
    }
  } else if (guess <= 20) {
    if (scoreHolder > 1) {
      messageReply(
        guess > secretNumber
          ? (document.querySelector("h1").textContent = "↗️ Too High")
          : (document.querySelector("h1").textContent = "↘️ Too Low")
      );
      scoreHolder--;
      document.querySelector(".scoreHolder").textContent = scoreHolder;
    } else {
      messageReply("You Lost the game");
      document.querySelector(".scoreHolder").textContent = 0;
      document.querySelector(".check").classList.add("hidden");
      document.querySelector(".again").classList.remove("hidden");
      document.querySelector("h1").textContent = "You Lost the game 😒";
      document.querySelector("div").textContent = "😫";
      document.querySelector(".between").classList.add("hidden");
      document.querySelector("input").style.pointerEvents = "none";
    }
  } else {
    messageReply("⛔ Number Higher than 20, from 1 to 20");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreHolder = 5;
  messageReply("Start Guessing 🤔...");
  document.querySelector("input").style.pointerEvents = "fill";
  document.querySelector("input").value = "";
  document.querySelector("input").style.backgroundColor = "#a8bff0";
  document.querySelector("body").style.backgroundColor = "#a8bff0";
  document.querySelector(".check").classList.remove("hidden");
  document.querySelector(".again").classList.add("hidden");
  document.querySelector("div").textContent = "👇";
  document.querySelector(".showCorrectNum").style.width = "15rem";
  document.querySelector("h1").textContent = "🔢 Guess My Number";
  document.querySelector(".between").classList.remove("hidden");
  document.querySelector(".scoreHolder").textContent = scoreHolder;
});
