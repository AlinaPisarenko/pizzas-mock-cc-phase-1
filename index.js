fetch("http://localhost:3000/pizzas")
  .then((res) => res.json())
  .then((pizzas) => renderPizzas(pizzas));

function renderPizzas(pizzas) {
  pizzas.forEach(renderPizza);
}

const pizzaMenu = document.querySelector("#pizza-menu");

function renderPizza(pizza) {
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
  likeButton.innerText = "❤️";
  let likes = document.createElement("p");
  likes.innerText = `${pizza.likes} likes`;
  likesDiv.append(likeButton, likes);
  pizzaDiv.append(pizzaName, pizzaImg, pizzaToppings, likesDiv);
  pizzaMenu.append(pizzaDiv);
}
