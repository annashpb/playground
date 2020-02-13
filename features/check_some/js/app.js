"use strict";

const answers = document.querySelector(".answers-js");

function setActive(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.target.classList.toggle("answers__item--active");
}

answers.addEventListener("click", setActive);
