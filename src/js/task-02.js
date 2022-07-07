const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("ul")
const li = document.createElement("li")
li.textContent = "Potatoes"
li.className = "item"
ul.append(li)

const article =
  `<li class="item">Mushrooms</li>
  <li class="item">Garlic</li>
  <li class="item">Tomatos</li>
  <li class="item">Herbs</li>
  <li class="item">Condiments</li>`; 
ul.insertAdjacentHTML("beforeend", article);