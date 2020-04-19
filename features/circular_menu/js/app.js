"use strict";

let menus = [...document.querySelectorAll(".circular-menu")];

menus.map((menu) => {
  let items = menu.querySelectorAll(".circular-menu__item");
  let button = menu.querySelector(".circular-menu__btn");

  let active = false;

  const length = items.length;
  const arc = 2 * Math.PI * (1 / length); //расстояние, на которое элементы будут отдалены друг от друга (2 pi - полный оборот круга)
  const radius = 40; //радиус элемента

  function btnClickHandler(e) {
    e.preventDefault();
    active = !active; //тоггл статуса
    if (active) {
      button.classList.add("circular-menu__btn_active");
      for (let i = 0; i < length; i += 1) {
        items[i].style.opacity = 1;
        const angle = i * arc; //угол элемента - номер элемента, умноженный на расстояние между элементами
        //   координаты элемента:
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        items[i].style.left = 50 + x + "%";
        items[i].style.top = 50 + y + "%";
      }
    } else {
      button.classList.remove("circular-menu__btn_active");
      for (let i = 0; i < length; i += 1) {
        items[i].removeAttribute("style");
      }
    }
  }

  button.addEventListener("click", btnClickHandler);
});
