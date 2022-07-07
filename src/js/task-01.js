const number = document.querySelectorAll("li.item")
const numbers = number.length
console.log("Number of categories :", numbers)





number.forEach(function (el, index) {
    const numberOfElements = el.querySelectorAll('li');
    const nameOfElements = el.querySelector('h2');
    console.log(`Category: ${nameOfElements.textContent}`);
    console.log(`Elements: ${numberOfElements.length}`);
});






