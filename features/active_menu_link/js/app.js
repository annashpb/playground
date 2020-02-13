"use strict";

const navigation = document.querySelector(".navigation");

function setActiveLink(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  const nowActive = event.currentTarget.querySelector(
    ".navigation__link--active"
  );
  nowActive.classList.remove("navigation__link--active");
  nowActive.classList.add("navigation__link");
  event.target.classList.remove("navigation__link");
  event.target.classList.add("navigation__link--active");
}

navigation.addEventListener("click", setActiveLink);
