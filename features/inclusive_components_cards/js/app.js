"use strict";

const cards = document.querySelectorAll(".card-js");

Array.prototype.forEach.call(cards, (card) => {  
  card.style.cursor = "pointer";
  let down,
    up,
    link = card.querySelector("h2 a");
  card.onmousedown = () => (down = +new Date());
  card.onmouseup = () => {
    up = +new Date();
    if (up - down < 200 && event.target !== card.querySelector(".card__bottom--trailer")) {
      link.click();      
    }
  };
});
