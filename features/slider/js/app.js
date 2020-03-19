"use strict";

const refs = {
  prevBtn: document.querySelector(".prev-btn"),
  nextBtn: document.querySelector(".next-btn")
};

function handlePrevBtnClick() {
  const slides = document.querySelectorAll(".slides-item");
  for (let i = 0; i < slides.length; i += 1) {
    if (slides[i].classList.contains("slides-item-active")) {
      const activeSlide = slides[i];
      let prevSlide;
      if (i === 0) {
        prevSlide = slides[slides.length - 1];
      } else {
        prevSlide = slides[i - 1];
      }
      activeSlide.classList.remove("slides-item-active");
      prevSlide.classList.add("slides-item-active");
      break;
    }
  }
}

function handleNextBtnClick() {
  const slides = document.querySelectorAll(".slides-item");
  for (let i = 0; i < slides.length; i += 1) {
    if (slides[i].classList.contains("slides-item-active")) {
      const activeSlide = slides[i];
      let nextSlide;
      if (i === slides.length - 1) {
        nextSlide = slides[0];
      } else {
        nextSlide = slides[i + 1];
      }
      activeSlide.classList.remove("slides-item-active");
      nextSlide.classList.add("slides-item-active");
      break;
    }
  }
}

refs.prevBtn.addEventListener("click", handlePrevBtnClick);
refs.nextBtn.addEventListener("click", handleNextBtnClick);
