fetch("http://localhost:3000/pizzas")
  .then((res) => res.json())
  .then((pizzas) => renderPizzas(pizzas));

function renderPizzas(pizzas) {
  pizzas.forEach(renderPizza);
}

const pizzaMenu = document.querySelector("#pizza-menu");

function renderPizza(pizza) {
  console.log(pizza);
  let pizzaDiv = document.createElement("div");
  pizzaDiv.id = "pizza";
  let pizzaImg = document.createElement("img");
  pizzaImg.src = pizza.image;
  let pizzaName = document.createElement("h2");
  pizzaName.innerText = pizza.name;
  let pizzaToppings = document.createElement("p");
  pizzaToppings.innerText = pizza.toppings;
  let likesDiv = document.createElement("div");
  likesDiv.id = "likes";
  let likeButton = document.createElement("button");
  // console.log(likeButton);
  likeButton.addEventListener("click", () => {
    // console.log("clicked", pizza);
    console.log(pizza.likes);
    // update innerText of likes p tag
    // pizza.likes += 1;
    // likes.innerText = pizza.likes + " likes";
    // likes.innerText = parseInt(likes.innerText) + 1 + " likes";
    pizza.likes++;
    likes.innerText = `${pizza.likes} likes`;
  });
  // likeButton.addEventListener("click", incrementLikes);
  likeButton.innerText = "❤️";
  let likes = document.createElement("p");
  likes.innerText = `${pizza.likes} likes`;
  likesDiv.append(likeButton, likes);
  pizzaDiv.append(pizzaName, pizzaImg, pizzaToppings, likesDiv);
  pizzaMenu.append(pizzaDiv);
}

// When a user submits the form, the pizza appears on the DOM. No persistence necessary.

// select the form
let form = document.querySelector("#new-pizza-form");
// add submit event to form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // make sure submit event is working
  // console.log("submitted");

  // collect the form data
  // select name, toppings, and image
  let name = document.querySelector("#pizza-name").value;
  let toppings = document.querySelector("#pizza-toppings").value;
  let image = document.querySelector("#pizza-image").value;
  let likes = 0;
  // console.log(name, toppings, image);

  // append pizza to the dom using renderPizza
  // first build an object with keys name, toppings, image
  let pizza = { name, toppings, image, likes };
  // {name: "v", toppings: "w", image: "x"}
  // console.log(pizza);
  renderPizza(pizza);
});

// function incrementLikes(event) {
//   // how do I access the pizzas likes
//   // debugger;
//   let likesPTag = event.target.parentElement.lastChild;
//   likesPTag.innerText = parseInt(likesPTag.innerText) + 1 + " likes";
// }
