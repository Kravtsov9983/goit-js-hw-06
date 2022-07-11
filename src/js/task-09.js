const refs = {
  color: document.querySelector(`.color`),
  btn: document.querySelector(`.change-color`),
};

refs.btn.addEventListener(`click`, () => {
  document.body.style.backgroundColor = getRandomHexColor()
   refs.color.textContent = getRandomHexColor()
})

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

